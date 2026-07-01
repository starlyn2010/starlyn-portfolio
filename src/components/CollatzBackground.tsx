"use client";

import { useEffect, useRef } from "react";

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

function createGlowTexture(): HTMLCanvasElement {
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
  return c;
}

export default function CollatzBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animId = 0;
    let lastTime = 0;
    let scene: any = null;
    let camera: any = null;
    let renderer: any = null;
    let composer: any = null;
    let orbitGroup: any = null;
    let particlesData: any[] = [];

    async function init() {
      const THREE = await import("three");

      const orbitsData = SEEDS.map((seed) => {
        const seq = collatzSequence(seed);
        const peak = Math.max(...seq);
        return { seq, peak, seed };
      });
      const maxSteps = Math.max(...orbitsData.map((o) => o.seq.length));

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 50);
      camera.position.set(0, 2.5, 13);
      camera.lookAt(0, 0.5, 0);

      renderer = new THREE.WebGLRenderer({
        canvas: canvas!,
        alpha: true,
        antialias: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0.8;

      orbitGroup = new THREE.Group();
      const centerIdx = (SEEDS.length - 1) / 2;

      const spriteMap = new THREE.CanvasTexture(createGlowTexture());

      orbitsData.forEach(({ seq, peak }, idx) => {
        const zOffset = (idx - centerIdx) * 0.22;

        const pts = seq.map((val, step) => {
          const x = (step / maxSteps) * 9 - 4.5;
          const y = (Math.log2(val) / Math.log2(peak)) * 4.5;
          return new THREE.Vector3(x, y, zOffset);
        });

        const curve = new THREE.CatmullRomCurve3(pts);

        const tubeGeo = new THREE.TubeGeometry(curve, Math.min(seq.length * 2, 160), 0.035, 6, false);

        const hue = 0.07 + (idx / SEEDS.length) * 0.06;
        const tubeMat = new THREE.MeshBasicMaterial({
          color: new THREE.Color().setHSL(hue, 0.85, 0.45),
          transparent: true,
          opacity: 0.15 + (idx / SEEDS.length) * 0.2,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        });
        orbitGroup.add(new THREE.Mesh(tubeGeo, tubeMat));

        const numP = 6;
        const pos = new Float32Array(numP * 3);
        const pGeo = new THREE.BufferGeometry();
        pGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));

        const pMat = new THREE.PointsMaterial({
          size: 0.18,
          map: spriteMap,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
          transparent: true,
          color: new THREE.Color().setHSL(hue + 0.02, 1.0, 0.65),
          opacity: 0.9,
          sizeAttenuation: true,
        });

        const pMesh = new THREE.Points(pGeo, pMat);
        orbitGroup.add(pMesh);

        particlesData.push({
          mesh: pMesh,
          curve,
          offsets: Array.from({ length: numP }, (_, i) => i / numP),
          speeds: Array.from({ length: numP }, () => 0.025 + Math.random() * 0.015),
        });
      });

      scene.add(orbitGroup);

      try {
        const { EffectComposer } = await import(
          "three/addons/postprocessing/EffectComposer.js"
        );
        const { RenderPass } = await import(
          "three/addons/postprocessing/RenderPass.js"
        );
        const { UnrealBloomPass } = await import(
          "three/addons/postprocessing/UnrealBloomPass.js"
        );

        composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));

        const bloom = new UnrealBloomPass(
          new THREE.Vector2(window.innerWidth, window.innerHeight),
          0.12,
          0.3,
          0.75
        );
        composer.addPass(bloom);
      } catch {
        // bloom not available
      }

      const onResize = () => {
        const w = window.innerWidth;
        const h = window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
        composer?.setSize(w, h);
      };
      window.addEventListener("resize", onResize);

      const onMouse = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
      };
      window.addEventListener("mousemove", onMouse);

      let mouseX = 0;
      let mouseY = 0;
      let smoothX = 0;
      let smoothY = 0;
      const cameraPos = new THREE.Vector3();

      function animate(time: number) {
        const delta = lastTime ? (time - lastTime) / 1000 : 0.016;
        lastTime = time;
        const elapsed = time / 1000;

        smoothX += (mouseX - smoothX) * 0.015;
        smoothY += (mouseY - smoothY) * 0.015;

        const angle = elapsed * 0.035;
        const radius = 12;
        const tx = Math.sin(angle) * radius + smoothX * 1.5;
        const tz = Math.cos(angle) * radius + smoothY * 1.5;
        const ty = 2.5 + Math.sin(elapsed * 0.012) * 0.4;

        cameraPos.set(tx, ty, tz);
        camera.position.lerp(cameraPos, 0.025);
        camera.lookAt(0, 0.3, 0);

        orbitGroup.rotation.z = Math.sin(elapsed * 0.008) * 0.02;

        for (const p of particlesData) {
          const positions = p.mesh.geometry.attributes.position.array;
          for (let i = 0; i < p.offsets.length; i++) {
            p.offsets[i] = (p.offsets[i] + p.speeds[i] * delta) % 1;
            const pt = p.curve.getPoint(p.offsets[i]);
            positions[i * 3] = pt.x;
            positions[i * 3 + 1] = pt.y;
            positions[i * 3 + 2] = pt.z;
          }
          p.mesh.geometry.attributes.position.needsUpdate = true;
        }

        if (composer) {
          composer.render();
        } else {
          renderer.render(scene, camera);
        }

        animId = requestAnimationFrame(animate);
      }

      animId = requestAnimationFrame(animate);

      return () => {
        window.removeEventListener("resize", onResize);
        window.removeEventListener("mousemove", onMouse);
        cancelAnimationFrame(animId);
        renderer?.dispose();
        scene?.traverse((obj: any) => {
          if (obj.geometry) obj.geometry.dispose();
          if (obj.material) {
            if (Array.isArray(obj.material)) obj.material.forEach((m: any) => m.dispose());
            else obj.material.dispose();
          }
        });
        composer = null;
      };
    }

    const cleanupPromise = init();

    return () => {
      cleanupPromise.then((cleanup) => cleanup?.());
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
      style={{ opacity: 0.45, transition: "opacity 1s ease" }}
    />
  );
}
