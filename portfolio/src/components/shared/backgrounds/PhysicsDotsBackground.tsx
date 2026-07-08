import { useEffect, useRef } from "react";

interface Particle {
  x: number;  // Page-space X
  y: number;  // Page-space Y
  vx: number; // Page-space velocity X
  vy: number; // Page-space velocity Y
  radius: number;
}

export default function PhysicsDotsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Configuration
    const connectionDist = 115; // Max distance to connect two particles
    const mouseRadius = 145; // Mouse gravity and link radius in screen space
    const mouseAttraction = 0.28; // Strength of pull to mouse
    const minMouseDist = 24; // Min distance to mouse to avoid fusing

    let particles: Particle[] = [];

    // Get current document height
    const getDocHeight = () => {
      return Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        window.innerHeight
      );
    };

    // Calculate particle count proportional to document size (Increased density)
    const getParticleCount = (docHeight: number) => {
      const pageArea = width * docHeight;
      // Increased density (divisor decreased from 13000 to 8000, cap increased from 240 to 380)
      return Math.min(Math.floor(pageArea / 8000), 380);
    };

    const initParticles = () => {
      particles = [];
      const docHeight = getDocHeight();
      const count = getParticleCount(docHeight);
      
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const initialSpeed = 0.25 + Math.random() * 0.35;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * docHeight,
          vx: Math.cos(angle) * initialSpeed,
          vy: Math.sin(angle) * initialSpeed,
          radius: 1.1 + Math.random() * 1.4,
        });
      }
    };

    initParticles();

    // Re-initialize particles when viewport size or page dimensions change
    let lastDocHeight = getDocHeight();
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const currentDocHeight = getDocHeight();
      
      if (Math.abs(currentDocHeight - lastDocHeight) > 200 || width !== window.innerWidth) {
        lastDocHeight = currentDocHeight;
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

    const getThemeColors = () => {
      const isDark = document.documentElement.classList.contains("dark");
      return {
        isDark,
        dotColor: isDark ? "rgba(255, 255, 255, 0.4)" : "rgba(0, 0, 0, 0.35)",
        lineColor: isDark ? "255, 255, 255" : "0, 0, 0",
        activeLineColor: isDark ? "179, 179, 241" : "99, 102, 241",
        cursorColor: isDark ? "#ffffff" : "#6366f1",
        cursorRingColor: isDark ? "rgba(255, 255, 255, 0.25)" : "rgba(99, 102, 241, 0.3)",
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const colors = getThemeColors();
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mActive = mouseRef.current.active;
      const docHeight = getDocHeight();
      const scrollY = window.scrollY;

      // 1. Physics & Particle Updates
      particles.forEach((p) => {
        p.vx += (Math.random() - 0.5) * 0.025;
        p.vy += (Math.random() - 0.5) * 0.025;

        // Mouse attraction (calculated in page space)
        if (mActive) {
          const mousePageY = my + scrollY;
          const dx = mx - p.x;
          const dy = mousePageY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

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
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
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
        if (p.x < 0) { p.x = 0; p.vx = -p.vx; }
        if (p.x > width) { p.x = width; p.vx = -p.vx; }
        if (p.y < 0) { p.y = 0; p.vy = -p.vy; }
        if (p.y > docHeight) { p.y = docHeight; p.vy = -p.vy; }
      });

      // 2. Filter Particles Visible in Viewport
      const visibleIndices: number[] = [];
      const margin = 80;
      particles.forEach((p, idx) => {
        const screenY = p.y - scrollY;
        if (screenY > -margin && screenY < height + margin) {
          visibleIndices.push(idx);

          ctx.beginPath();
          ctx.arc(p.x, screenY, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = colors.dotColor;
          ctx.fill();
        }
      });

      // 3. Draw Constellation Connections (Lines)
      ctx.lineWidth = 0.8;
      
      for (let i = 0; i < visibleIndices.length; i++) {
        const idx1 = visibleIndices[i];
        const p1 = particles[idx1];
        const screenY1 = p1.y - scrollY;

        for (let j = i + 1; j < visibleIndices.length; j++) {
          const idx2 = visibleIndices[j];
          const p2 = particles[idx2];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.22;
            const screenY2 = p2.y - scrollY;
            ctx.beginPath();
            ctx.moveTo(p1.x, screenY1);
            ctx.lineTo(p2.x, screenY2);
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
