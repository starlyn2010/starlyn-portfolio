---
name: hero-bg
description: "Diseña e itera el fondo animado del portfolio hasta lograr calidad MotionSites. Usar con /loop para iteración autónoma. Se activa con 'fondo', 'background', 'animación de fondo', 'hero background', 'motion background'."
argument-hint: "[action: status | iterate | review | spec]"
---

# Hero Background — MotionSites Quality

Produce y refina el fondo animado del Hero en `/home/starlyn/starlyn-portfolio/src/components/HeroBackground.tsx`.
Cada iteración del loop: analiza, propone cambio, implementa, build, review. Sin intervención humana hasta que la tarea esté completa.

## Especificación Técnica

### Stack
- **Canvas 2D** nativo (sin Three.js — más ligero, menos memoria, más compatible)
- Sin dependencias externas para el fondo en sí (no importa GSAP/Three.js solo para el bg)

### Requisitos visuales (MotionSites Standard)

| Criterio | Estándar |
|---|---|
| **Rendimiento** | 60fps estables en hardware mid-range. No más de 0.5ms por frame de draw |
| **Responsive** | Escala a cualquier viewport. Partículas se redistribuyen en resize |
| **Dark/Light** | Funciona en ambos modos. Dark: ámbar suave. Light: ámbar más oscuro/gris |
| **No compite** | Opacidad general ≤ 0.3. Ningún elemento del fondo debe distraer del texto |
| **Profundidad** | Efecto parallax sutil con el mouse (< 3px de desplazamiento máximo) |
| **Reduced motion** | `prefers-reduced-motion: reduce` → frame estático o eliminar |
| **Elegante** | Sin tecnicismos. Sin textos. Sin diagramas. Pura atmósfera |
| **Propósito** | Que se sienta intencional, no decorativo. Debe reforzar la marca: matemático, joven, preciso |

### Paleta de colores
```css
/* Dark mode */
--dot-dark: rgba(217, 119, 6, 0.15);   /* ámbar tenue */
--glow-dark: rgba(217, 119, 6, 0.06);  /* glow sutil */
--line-dark: rgba(217, 119, 6, 0.08);  /* conexiones */

/* Light mode */
--dot-light: rgba(180, 90, 0, 0.12);   /* ámbar más oscuro */
--glow-light: rgba(180, 90, 0, 0.04);
--line-light: rgba(180, 90, 0, 0.06);
```

### Estructura del canvas
- Z-index: 0 (fixed, pointer-events-none)
- Dentro del Hero section (no global) con `position: absolute; inset: 0;`
- El hero debe tener `overflow: hidden`

### Loop de Iteración

Cada ciclo del loop:

1. **Espec**: Leer este SKILL.md + leer el código actual de HeroBackground.tsx
2. **Review**: Analizar contra los criterios visuales. Listar qué falta o qué está mal
3. **Plan**: Proponer un cambio específico y acotado (una sola cosa por iteración)
4. **Code**: Implementar el cambio en HeroBackground.tsx
5. **Build**: `cd /home/starlyn/starlyn-portfolio && npm run build`
6. **Si build falla**: corregir error, rebuild, repetir hasta build pase
7. **Commit blocker**: Si el build pasa, preguntar al usuario. SIN AUTO-COMMIT.
8. **Next**: Volver al paso 2

### Condiciones de parada del loop
- El background cumple TODOS los criterios visuales (sección Requisitos visuales)
- El usuario dice "para" o "stop"
- 20 iteraciones alcanzadas sin lograr mejora

### Archivos que puede modificar
- `/home/starlyn/starlyn-portfolio/src/components/HeroBackground.tsx` (crear si no existe)
- `/home/starlyn/starlyn-portfolio/src/components/Hero.tsx` (solo para importar HeroBackground)
- `/home/starlyn/starlyn-portfolio/src/app/page.tsx` (solo si HeroBackground va global)

### Archivos que NO puede modificar
- `/home/starlyn/starlyn-portfolio/src/app/globals.css`
- `/home/starlyn/starlyn-portfolio/src/data/`
- Contenido de otras secciones (About, Research, Projects, Skills, Timeline, Footer)
