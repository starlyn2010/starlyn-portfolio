"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function collatzSequence(n: number, maxLen = 300): number[] {
  const seq = [n];
  while (n > 1 && seq.length < maxLen) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    seq.push(n);
  }
  return seq;
}

const SEEDS = [
  27, 31, 41, 47, 53, 71, 97, 107, 151,
  233, 313, 327, 649, 703, 871, 1161, 2223,
];

function makeGlowTexture(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 64;
  c.height = 64;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.1, "rgba(255,200,50,0.9)");
  g.addColorStop(0.4, "rgba(217,119,6,0.4)");
  g.addColorStop(1, "rgba(217,119,6,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

export default function CollatzBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const orbitsData = SEEDS.map((seed) => {
      const seq = collatzSequence(seed);
      return { seq, peak: Math.max(...seq), seed };
    });
    const maxSteps = Math.max(...orbitsData.map((o) => o.seq.length));
    const centerIdx = (SEEDS.length - 1) / 2;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 50);
    camera.position.set(0, 2.5, 13);
    camera.lookAt(0, 0.5, 0);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const group = new THREE.Group();
    const spriteMap = makeGlowTexture();
    const particles: { mesh: THREE.Points; curve: THREE.CatmullRomCurve3; offsets: number[]; speeds: number[] }[] = [];

    orbitsData.forEach(({ seq, peak }, idx) => {
      const zOff = (idx - centerIdx) * 0.22;
      const pts = seq.map((v, s) => new THREE.Vector3((s / maxSteps) * 9 - 4.5, (Math.log2(v) / Math.log2(peak)) * 4.5, zOff));
      const curve = new THREE.CatmullRomCurve3(pts);
      const tubeGeo = new THREE.TubeGeometry(curve, Math.min(seq.length * 2, 160), 0.035, 6, false);
      const hue = 0.07 + (idx / SEEDS.length) * 0.06;

      const tubeMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color().setHSL(hue, 0.85, 0.45),
        transparent: true,
        opacity: 0.2 + (idx / SEEDS.length) * 0.25,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      group.add(new THREE.Mesh(tubeGeo, tubeMat));

      const nP = 6;
      const pos = new Float32Array(nP * 3);
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const m = new THREE.PointsMaterial({
        size: 0.2,
        map: spriteMap,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        transparent: true,
        color: new THREE.Color().setHSL(hue + 0.02, 1.0, 0.7),
        sizeAttenuation: true,
      });
      const mesh = new THREE.Points(g, m);
      group.add(mesh);
      particles.push({ mesh, curve, offsets: Array.from({ length: nP }, (_, i) => i / nP), speeds: Array.from({ length: nP }, () => 0.025 + Math.random() * 0.015) });
    });

    scene.add(group);

    let composer: any = null;
    (async () => {
      try {
        const { EffectComposer } = await import("three/addons/postprocessing/EffectComposer.js");
        const { RenderPass } = await import("three/addons/postprocessing/RenderPass.js");
        const { UnrealBloomPass } = await import("three/addons/postprocessing/UnrealBloomPass.js");
        composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));
        composer.addPass(new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.12, 0.3, 0.75));
      } catch { /* no bloom */ }
    })();

    let mouseX = 0, mouseY = 0, sx = 0, sy = 0, lastT = 0, animId = 0;

    const onMouse = (e: MouseEvent) => { mouseX = (e.clientX / window.innerWidth) * 2 - 1; mouseY = -(e.clientY / window.innerHeight) * 2 + 1; };
    const onResize = () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); composer?.setSize(window.innerWidth, window.innerHeight); };

    window.addEventListener("mousemove", onMouse);
    window.addEventListener("resize", onResize);

    function animate(time: number) {
      const dt = lastT ? (time - lastT) / 1000 : 0.016;
      lastT = time;
      const t = time / 1000;
      sx += (mouseX - sx) * 0.015;
      sy += (mouseY - sy) * 0.015;

      const a = t * 0.035;
      camera.position.lerp(new THREE.Vector3(Math.sin(a) * 12 + sx * 1.5, 2.5 + Math.sin(t * 0.012) * 0.4, Math.cos(a) * 12 + sy * 1.5), 0.025);
      camera.lookAt(0, 0.3, 0);
      group.rotation.z = Math.sin(t * 0.008) * 0.02;

      for (const p of particles) {
        const pos = p.mesh.geometry.attributes.position.array;
        for (let i = 0; i < p.offsets.length; i++) {
          p.offsets[i] = (p.offsets[i] + p.speeds[i] * dt) % 1;
          const pt = p.curve.getPoint(p.offsets[i]);
          pos[i * 3] = pt.x; pos[i * 3 + 1] = pt.y; pos[i * 3 + 2] = pt.z;
        }
        p.mesh.geometry.attributes.position.needsUpdate = true;
      }

      if (composer) composer.render();
      else renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    }

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      scene.traverse((o: any) => { o.geometry?.dispose(); if (o.material) (Array.isArray(o.material) ? o.material : [o.material]).forEach((m: any) => m.dispose()); });
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
      style={{ opacity: 0.55, transition: "opacity 1s ease" }}
    />
  );
}
