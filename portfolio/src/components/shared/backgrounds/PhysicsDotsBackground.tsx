import { useEffect, useRef } from "react";

interface Particle {
  x: number; // Page-space X
  y: number; // Page-space Y
  vx: number; // Page-space velocity X
  vy: number; // Page-space velocity Y
  radius: number;
}

export default function PhysicsDotsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    // Bail out completely on mobile, no canvas setup, no listeners, no reflows.
    if (window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas dimensions once - triggers a single layout read, not per-frame.
    canvas.width = width;
    canvas.height = height;

    // Configuration
    const connectionDist = 115; // Max distance to connect two particles
    const mouseRadius = 145; // Mouse gravity and link radius in screen space
    const mouseAttraction = 0.28; // Strength of pull to mouse
    const minMouseDist = 24; // Min distance to mouse to avoid fusing

    let particles: Particle[] = [];

    // Cache document height so draw() never reads layout properties.
    // Updated only on resize (batched, not per-frame).
    let cachedDocHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      window.innerHeight,
    );

    // Calculate particle count proportional to document size (Increased density)
    const getParticleCount = (docHeight: number) => {
      const pageArea = width * docHeight;
      // Increased density (divisor decreased from 13000 to 8000, cap increased from 240 to 380)
      return Math.min(Math.floor(pageArea / 8000), 380);
    };

    const initParticles = () => {
      particles = [];
      const count = getParticleCount(cachedDocHeight);
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const initialSpeed = 0.25 + Math.random() * 0.35;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * cachedDocHeight,
          vx: Math.cos(angle) * initialSpeed,
          vy: Math.sin(angle) * initialSpeed,
          radius: 1.1 + Math.random() * 1.4,
        });
      }
    };

    initParticles();

    // Resize: read layout once at the start of the handler (not inside rAF).
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      const newDocHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        window.innerHeight,
      );

      canvas.width = newWidth;
      canvas.height = newHeight;
      width = newWidth;
      height = newHeight;

      if (Math.abs(newDocHeight - cachedDocHeight) > 200) {
        cachedDocHeight = newDocHeight;
        initParticles();
      }
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

    // Cache theme colors - re-read only when theme class changes, not every frame.
    let colors = getThemeColors();
    const themeObserver = new MutationObserver(() => {
      colors = getThemeColors();
    });
    themeObserver.observe(document.documentElement, {
      attributeFilter: ["class"],
    });

    function getThemeColors() {
      const isDark = document.documentElement.classList.contains("dark");
      return {
        dotColor: isDark ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.35)",
        lineColor: isDark ? "255, 255, 255" : "0, 0, 0",
        activeLineColor: isDark ? "179, 179, 241" : "99, 102, 241",
        cursorColor: isDark ? "#ffffff" : "#6366f1",
        cursorRingColor: isDark
          ? "rgba(255, 255, 255, 0.25)"
          : "rgba(99, 102, 241, 0.3)",
      };
    }

    const draw = () => {
      // Read scrollY once per frame - this is fine (no style invalidation).
      const scrollY = window.scrollY;

      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mActive = mouseRef.current.active;

      // 1. Physics & Particle Updates
      for (const p of particles) {
        p.vx += (Math.random() - 0.5) * 0.025;
        p.vy += (Math.random() - 0.5) * 0.025;

        if (mActive) {
          const mousePageY = my + scrollY;
          const dx = mx - p.x;
          const dy = mousePageY - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < mouseRadius) {
            if (dist > minMouseDist) {
              const pull = (1 - dist / mouseRadius) * mouseAttraction * 0.22;
              p.vx += (dx / dist) * pull;
              p.vy += (dy / dist) * pull;
            } else {
              const push = (1 - dist / minMouseDist) * 0.35;
              p.vx -= (dx / dist) * push;
              p.vy -= (dy / dist) * push;
            }
          }
        }

        // Apply friction
        p.vx *= 0.94;
        p.vy *= 0.94;

        // Speed boundaries
        const speed = Math.hypot(p.vx, p.vy);
        const minSpeed = 0.15;
        const maxSpeed = 1.4;
        if (speed < minSpeed) {
          const angle = Math.random() * Math.PI * 2;
          p.vx = Math.cos(angle) * minSpeed;
          p.vy = Math.sin(angle) * minSpeed;
        } else if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed;
          p.vy = (p.vy / speed) * maxSpeed;
        }

        p.x += p.vx;
        p.y += p.vy;

        // Boundaries
        if (p.x < 0) {
          p.x = 0;
          p.vx = -p.vx;
        }
        if (p.x > width) {
          p.x = width;
          p.vx = -p.vx;
        }
        if (p.y < 0) {
          p.y = 0;
          p.vy = -p.vy;
        }
        if (p.y > cachedDocHeight) {
          p.y = cachedDocHeight;
          p.vy = -p.vy;
        }
      }

      // 2. Filter visible particles
      const margin = 80;
      const visibleIndices: number[] = [];
      for (let i = 0; i < particles.length; i++) {
        const screenY = particles[i].y - scrollY;
        if (screenY > -margin && screenY < height + margin) {
          visibleIndices.push(i);
          ctx.beginPath();
          ctx.arc(particles[i].x, screenY, particles[i].radius, 0, Math.PI * 2);
          ctx.fillStyle = colors.dotColor;
          ctx.fill();
        }
      }

      // 3. Draw connections
      ctx.lineWidth = 0.8;
      for (let i = 0; i < visibleIndices.length; i++) {
        const p1 = particles[visibleIndices[i]];
        const screenY1 = p1.y - scrollY;

        for (let j = i + 1; j < visibleIndices.length; j++) {
          const p2 = particles[visibleIndices[j]];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p1.x, screenY1);
            ctx.lineTo(p2.x, p2.y - scrollY);
            ctx.strokeStyle = `rgba(${colors.lineColor}, ${String(alpha)})`;
            ctx.stroke();
          }
        }

        // Connect points to Mouse
        if (mActive) {
          const dx = p1.x - mx;
          const dy = screenY1 - my;
          const dist = Math.hypot(dx, dy);
          if (dist < mouseRadius) {
            const alpha = (1 - dist / mouseRadius) * 0.32;
            ctx.beginPath();
            ctx.moveTo(p1.x, screenY1);
            ctx.lineTo(mx, my);
            ctx.strokeStyle = `rgba(${colors.activeLineColor}, ${String(alpha)})`;
            ctx.stroke();
          }
        }
      }

      // 4. Draw Interactive Concentric Cursor
      if (mActive) {
        ctx.beginPath();
        ctx.arc(mx, my, minMouseDist, 0, Math.PI * 2);
        ctx.strokeStyle = colors.cursorRingColor;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(mx, my, 4, 0, Math.PI * 2);
        ctx.fillStyle = colors.cursorColor;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      themeObserver.disconnect();
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
