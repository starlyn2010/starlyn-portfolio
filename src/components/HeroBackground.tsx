"use client";

import { useEffect, useRef } from "react";

const N = 60;

export default function HeroBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d")!;
    let w = 0, h = 0, animId = 0, t = 0, mx = 0, my = 0;
    let isDark = true;
    let netTimer = -10;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      if (!c) return;
      c.width = w;
      c.height = h;
    }
    resize();
    window.addEventListener("resize", resize);

    const pts = Array.from({ length: N }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.08,
      vy: (Math.random() - 0.5) * 0.08 - 0.03,
      r: 1 + Math.random() * 2,
      phase: Math.random() * Math.PI * 2,
      speed: 0.2 + Math.random() * 0.4,
    }));

    function updateTheme() {
      isDark = document.documentElement.classList.contains("dark");
    }
    updateTheme();
    const obs = new MutationObserver(updateTheme);
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / w - 0.5) * 2;
      my = (e.clientY / h - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    const onClick = () => { netTimer = 0; };
    window.addEventListener("click", onClick);

    function draw() {
      if (!prefersReduced) {
        t += 0.003;
        netTimer += 0.003;
      }
      ctx.clearRect(0, 0, w, h);

      const isNet = netTimer >= 0 && netTimer < 5;
      const netEase = isNet ? Math.min(netTimer / 0.4, 1) * Math.max(1 - (netTimer - 3) / 2, 0) : 0;

      let r1: number, g1: number, b1: number;
      let r2: number, g2: number, b2: number;
      if (isDark) {
        r1 = 217; g1 = 119; b1 = 6;
        r2 = 217; g2 = 119; b2 = 6;
      } else {
        r1 = 80; g1 = 45; b1 = 10;
        r2 = 160; g2 = 80; b2 = 0;
      }

      if (!prefersReduced) {
        for (const p of pts) {
          p.x += p.vx + Math.sin(t * p.speed + p.phase) * 0.12;
          p.y += p.vy + Math.cos(t * 0.6 + p.phase * 1.1) * 0.08;
          p.x += mx * 0.2;
          p.y += my * 0.12;
          if (p.x < -20) p.x = w + 20;
          if (p.x > w + 20) p.x = -20;
          if (p.y < -20) p.y = h + 20;
          if (p.y > h + 20) p.y = -20;
        }
      }

      if (netEase > 0.01) {
        for (let i = 0; i < pts.length; i++) {
          for (let j = i + 1; j < pts.length; j++) {
            const a = pts[i], b = pts[j];
            const dx = a.x - b.x, dy = a.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 130) {
              const dAlpha = (1 - dist / 130);
              const hue = (i * 37 + j * 73) % 360;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = `hsla(${hue},65%,55%,${0.45 * dAlpha * netEase})`;
              ctx.lineWidth = 0.3 + netEase * 1.2;
              ctx.stroke();
            }
          }
        }
      }

      for (const p of pts) {
        const pulse = prefersReduced ? 1 : Math.sin(t * p.speed + p.phase) * 0.2 + 0.8;
        const baseAlpha = isDark ? 0.12 + p.r * 0.04 : 0.2 + p.r * 0.06;
        const alpha = baseAlpha * pulse;
        const glowMul = 1 + netEase * 2;

        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4 * glowMul);
        g.addColorStop(0, `rgba(${r2},${g2},${b2},${alpha})`);
        g.addColorStop(0.3, `rgba(${r2},${g2},${b2},${alpha * 0.3})`);
        g.addColorStop(1, `rgba(${r2},${g2},${b2},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 4 * glowMul, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r1},${g1},${b1},${alpha * 0.7})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("click", onClick);
      obs.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="fixed inset-0 pointer-events-none"
      style={{ opacity: 0.55 }}
    />
  );
}
