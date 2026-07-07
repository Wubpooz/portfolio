import { useEffect, useRef } from "react";
import { PLANETS } from "./index";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  speed: number;
  colorRGB: string; // "r, g, b" format for easy alpha interpolation
  history: { x: number; y: number }[];
}

export default function FlowFieldBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  // Track animated planet coordinates (screen space)
  const planetCoordsRef = useRef(
    PLANETS.map((planet) => ({
      x: planet.alignLeft ? 50 : window.innerWidth - 50,
      y: window.innerHeight * planet.defaultYPercent,
    }))
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const maxParticles = 110; // High density but optimized for history trails rendering
    let time = 0;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    const getThemeConfig = () => {
      const isDark = document.documentElement.classList.contains("dark");
      return {
        isDark,
        // Elegant, desaturated base RGB values
        particleRGBs: isDark
          ? [
              "179, 179, 241", // Primary violet
              "147, 197, 253", // Soft blue
              "244, 114, 182", // Soft pink
              "255, 255, 255", // Soft white
            ]
          : [
              "99, 102, 241",  // Indigo
              "59, 130, 246",  // Blue
              "236, 72, 153",  // Pink
              "0, 0, 0",        // Soft dark
            ],
        cursorColor: isDark ? "#ffffff" : "#6366f1",
        cursorRingColor: isDark ? "rgba(255, 255, 255, 0.25)" : "rgba(99, 102, 241, 0.3)",
        textColor: isDark ? "rgba(255, 255, 255, 0.35)" : "rgba(0, 0, 0, 0.38)",
        planetCoreBg: isDark ? "#1a1a1a" : "#ffffff",
        planetBorder: isDark ? "rgba(179, 179, 241, 0.3)" : "rgba(179, 179, 241, 0.35)",
        planetGlow: isDark ? "rgba(255, 255, 255, 0.02)" : "rgba(0, 0, 0, 0.015)",
        planetSymbol: isDark ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.6)",
      };
    };

    // Initialize particles
    const createParticle = (spawnRandomly = false): Particle => {
      const config = getThemeConfig();
      const pX = spawnRandomly ? Math.random() * width : (Math.random() > 0.5 ? 0 : width);
      const pY = Math.random() * height;
      
      return {
        x: pX,
        y: pY,
        vx: 0,
        vy: 0,
        speed: 1.0 + Math.random() * 1.2,
        life: 0,
        maxLife: 100 + Math.random() * 100,
        colorRGB: config.particleRGBs[Math.floor(Math.random() * config.particleRGBs.length)],
        history: [],
      };
    };

    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle(true));
    }

    const draw = () => {
      // Clear canvas fully to avoid scrolling traces/smears
      ctx.clearRect(0, 0, width, height);

      time += 0.0018; 
      const config = getThemeConfig();
      const isMobile = width < 1024;
      const scrollY = window.scrollY;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mActive = mouseRef.current.active;
      const minMouseDist = 24;
      const activeRadius = 150; // Declared here for global particle scope

      // Update Planet Positions based on DOM section scrolls
      const updatedCoords = PLANETS.map((planet, i) => {
        const prev = planetCoordsRef.current[i];
        
        // Target X
        const contentWidth = 920;
        let tx = planet.alignLeft
          ? width / 2 - contentWidth / 2 - 80
          : width / 2 + contentWidth / 2 + 80;

        if (planet.alignLeft) {
          tx = Math.max(tx, 45);
        } else {
          tx = Math.min(tx, width - 45);
        }

        // Target Y
        let ty = height * planet.defaultYPercent - scrollY;
        const el = document.querySelector(planet.selector);
        if (el) {
          const rect = el.getBoundingClientRect();
          ty = rect.top + rect.height / 2;
        }

        const nextX = prev.x + (tx - prev.x) * 0.08;
        const nextY = prev.y + (ty - prev.y) * 0.08;

        planetCoordsRef.current[i] = { x: nextX, y: nextY };
        return { x: nextX, y: nextY };
      });

      // 1. Draw Planet Light Glows (subtle, desaturated)
      PLANETS.forEach((planet, i) => {
        const coords = updatedCoords[i];
        const glowRadius = planet.gravityRadius * 0.8;

        ctx.save();
        ctx.globalAlpha = isMobile ? 0.35 : 1.0;

        const gradient = ctx.createRadialGradient(coords.x, coords.y, 0, coords.x, coords.y, glowRadius);
        gradient.addColorStop(0, config.planetGlow);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
      });

      // 2. Update and Draw Flowing Particles
      particles.forEach((p, idx) => {
        // Base trigonometric flow field
        let angle =
          Math.sin(p.x * 0.0035 + time * 1.4) * 1.8 +
          Math.cos(p.y * 0.0035 + time * 1.1) * 1.8;

        let totalForceX = Math.cos(angle) * p.speed;
        let totalForceY = Math.sin(angle) * p.speed;

        // Gravity pull from animated planets (orbits)
        PLANETS.forEach((planet, i) => {
          const coords = updatedCoords[i];
          const dx = coords.x - p.x;
          const dy = coords.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < planet.gravityRadius && dist > 10) {
            const pull = (1 - dist / planet.gravityRadius) * planet.strength * 2.2;
            const dirX = dx / dist;
            const dirY = dy / dist;
            const swirlX = -dirY;
            const swirlY = dirX;

            totalForceX += (dirX * 0.4 + swirlX * 0.6) * pull * p.speed;
            totalForceY += (dirY * 0.4 + swirlY * 0.6) * pull * p.speed;
          }
        });

        // Mouse interaction (swirling vortex vortex with increased attraction)
        if (mActive) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < activeRadius) {
            if (dist > minMouseDist) {
              const influence = (1 - dist / activeRadius) * 2.8;
              const dirX = dx / dist;
              const dirY = dy / dist;
              const swirlX = -dirY;
              const swirlY = dirX;

              // Force swirl to draw them into a strong orbit/vortex
              totalForceX = totalForceX * (1 - influence * 0.25) + (swirlX * 1.8 + dirX * 0.6) * influence * p.speed;
              totalForceY = totalForceY * (1 - influence * 0.25) + (swirlY * 1.8 + dirY * 0.6) * influence * p.speed;
            } else {
              // Push back slightly if they get too close to cursor center to avoid fusing
              const push = (1 - dist / minMouseDist) * 0.5;
              totalForceX -= (dx / dist) * push * p.speed;
              totalForceY -= (dy / dist) * push * p.speed;
            }
          }
        }

        // Apply final forces to velocity
        p.vx = totalForceX;
        p.vy = totalForceY;

        // Speed caps
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        const maxSpeed = p.speed * 2.6;
        if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed;
          p.vy = (p.vy / speed) * maxSpeed;
        }

        // Save current coordinates to history for trails
        p.history.push({ x: p.x, y: p.y });
        if (p.history.length > 12) {
          p.history.shift();
        }

        // Move particle
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        // Draw trail segment-by-segment with fading opacity (tapered glow look)
        if (p.history.length > 1) {
          for (let i = 1; i < p.history.length; i++) {
            const pt1 = p.history[i - 1];
            const pt2 = p.history[i];
            const opacity = i / p.history.length; // Fades out toward the tail

            ctx.beginPath();
            ctx.moveTo(pt1.x, pt1.y);
            ctx.lineTo(pt2.x, pt2.y);
            ctx.strokeStyle = `rgba(${p.colorRGB}, ${opacity * 0.38})`;
            ctx.lineWidth = 1.0 + opacity * 0.8;
            ctx.stroke();
          }
        }

        // Draw connections to cursor
        if (mActive) {
          const dx = mx - p.x;
          const dy = my - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < activeRadius - 20) {
            const alpha = (1 - dist / (activeRadius - 20)) * 0.16;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mx, my);
            ctx.strokeStyle = `rgba(${config.isDark ? "179, 179, 241" : "99, 102, 241"}, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Respawn if expired or out of bounds
        const outOfBounds = p.x < -20 || p.x > width + 20 || p.y < -20 || p.y > height + 20;
        if (p.life >= p.maxLife || outOfBounds) {
          particles[idx] = createParticle();
        }
      });

      // 3. Draw Planet Cores & Symbols (crisp, zero smears)
      PLANETS.forEach((planet, i) => {
        const coords = updatedCoords[i];

        ctx.save();
        ctx.globalAlpha = isMobile ? 0.25 : 1.0;

        // Core
        ctx.beginPath();
        ctx.arc(coords.x, coords.y, planet.radius, 0, Math.PI * 2);
        ctx.fillStyle = config.planetCoreBg;
        ctx.strokeStyle = config.planetBorder;
        ctx.lineWidth = 1.2;
        ctx.fill();
        ctx.stroke();

        // Symbol
        ctx.fillStyle = config.planetSymbol;
        ctx.font = "9px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(planet.symbol, coords.x, coords.y);

        // Text label
        if (!isMobile) {
          ctx.fillStyle = config.textColor;
          ctx.font = "bold 9px 'Geist Variable', sans-serif";
          ctx.fillText(planet.name.toUpperCase(), coords.x, coords.y + planet.radius + 14);
        }

        ctx.restore();
      });

      // 4. Draw Interactive Cursor (Matches the constellation concentric circles style)
      if (mActive) {
        // Outer Ring
        ctx.beginPath();
        ctx.arc(mx, my, minMouseDist, 0, Math.PI * 2);
        ctx.strokeStyle = config.cursorRingColor;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Inner Solid Dot
        ctx.beginPath();
        ctx.arc(mx, my, 4, 0, Math.PI * 2);
        ctx.fillStyle = config.cursorColor;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 h-full w-full pointer-events-none block"
    />
  );
}
