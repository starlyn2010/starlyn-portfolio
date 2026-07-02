"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function collatz(n: number, maxLen = 300): number[] {
  const seq = [n];
  while (n > 1 && seq.length < maxLen) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    seq.push(n);
  }
  return seq;
}

const SEEDS = [27, 31, 41, 47, 53, 71, 97, 107, 151, 233, 313, 327, 649, 703, 871];

function glowTex(): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 64; c.height = 64;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.15, "rgba(217,119,6,0.6)");
  g.addColorStop(0.5, "rgba(217,119,6,0.15)");
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

    const orbits = SEEDS.map((seed) => {
      const seq = collatz(seed);
      return { seq, peak: Math.max(...seq) };
    });
    const maxSteps = Math.max(...orbits.map((o) => o.seq.length));
    const ci = (SEEDS.length - 1) / 2;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a0a, 0.08);

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 2, 18);

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    const group = new THREE.Group();
    const sprite = glowTex();
    const particles: { mesh: THREE.Points; curve: THREE.CatmullRomCurve3; off: number[]; spd: number[] }[] = [];

    orbits.forEach(({ seq, peak }, idx) => {
      const zOff = (idx - ci) * 0.35;
      const pts = seq.map((v, s) => new THREE.Vector3(
        (s / maxSteps) * 10 - 5,
        (Math.log2(v) / Math.log2(peak)) * 3.5,
        zOff
      ));
      const curve = new THREE.CatmullRomCurve3(pts);

      const tube = new THREE.Mesh(
        new THREE.TubeGeometry(curve, Math.min(seq.length * 2, 120), 0.02, 5, false),
        new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(0.08 + idx * 0.003, 0.8, 0.5),
          transparent: true,
          opacity: 0.08 + idx * 0.008,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        })
      );
      group.add(tube);

      const nP = 4;
      const pos = new Float32Array(nP * 3);
      const g = new THREE.BufferGeometry();
      g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const m = new THREE.PointsMaterial({
        size: 0.12,
        map: sprite,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        transparent: true,
        color: new THREE.Color().setHSL(0.09, 1.0, 0.7),
        sizeAttenuation: true,
      });
      const mesh = new THREE.Points(g, m);
      group.add(mesh);
      particles.push({
        mesh, curve,
        off: Array.from({ length: nP }, (_, i) => i / nP),
        spd: Array.from({ length: nP }, () => 0.02 + Math.random() * 0.01),
      });
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
        composer.addPass(new UnrealBloomPass(
          new THREE.Vector2(window.innerWidth, window.innerHeight),
          0.06, 0.4, 0.9
        ));
      } catch { /* no bloom */ }
    })();

    let mx = 0, my = 0, sx = 0, sy = 0, lastT = 0, animId = 0;

    const onMouse = (e: MouseEvent) => { mx = (e.clientX / window.innerWidth) * 2 - 1; my = -(e.clientY / window.innerHeight) * 2 + 1; };
    const onResize = () => { camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix(); renderer.setSize(window.innerWidth, window.innerHeight); composer?.setSize(window.innerWidth, window.innerHeight); };
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("resize", onResize);

    function animate(time: number) {
      const dt = lastT ? (time - lastT) / 1000 : 0.016;
      lastT = time;
      const t = time / 1000;
      sx += (mx - sx) * 0.01;
      sy += (my - sy) * 0.01;

      const a = t * 0.02;
      camera.position.lerp(new THREE.Vector3(Math.sin(a) * 16 + sx, 2 + Math.sin(t * 0.01) * 0.3, Math.cos(a) * 16 + sy), 0.02);
      camera.lookAt(0, 0.5, 0);

      group.rotation.z = Math.sin(t * 0.005) * 0.015;

      for (const p of particles) {
        const pos = p.mesh.geometry.attributes.position.array;
        for (let i = 0; i < p.off.length; i++) {
          p.off[i] = (p.off[i] + p.spd[i] * dt) % 1;
          const pt = p.curve.getPoint(p.off[i]);
          pos[i * 3] = pt.x; pos[i * 3 + 1] = pt.y; pos[i * 3 + 2] = pt.z;
        }
        p.mesh.geometry.attributes.position.needsUpdate = true;
      }

      composer ? composer.render() : renderer.render(scene, camera);
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
      className="fixed inset-0 w-full h-full z-0 pointer-events-none"
      style={{ opacity: 0.22 }}
    />
  );
}
