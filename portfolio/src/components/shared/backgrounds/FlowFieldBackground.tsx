import { useEffect, useRef } from "react";
import { PLANETS, draw3DPlanet } from "./index";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  speed: number;
  colorRGB: string;
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
    const maxParticles = 165; // Increased count for an even richer flow field
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
        fadeColor: isDark ? "rgba(17, 17, 17, 0.045)" : "rgba(255, 255, 255, 0.045)",
        particleRGBs: isDark
          ? [
              "179, 179, 241", // Primary desaturated violet
              "147, 197, 253", // Soft blue
              "244, 114, 182", // Soft pink
              "255, 255, 255", 
            ]
          : [
              "99, 102, 241",  // Indigo
              "59, 130, 246",  // Blue
              "236, 72, 153",  // Pink
              "0, 0, 0", 
            ],
        cursorColor: isDark ? "#ffffff" : "#6366f1",
        cursorRingColor: isDark ? "rgba(255, 255, 255, 0.25)" : "rgba(99, 102, 241, 0.3)",
        textColor: isDark ? "rgba(255, 255, 255, 0.35)" : "rgba(0, 0, 0, 0.38)",
        planetGlow: isDark ? "rgba(255, 255, 255, 0.02)" : "rgba(0, 0, 0, 0.015)",
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
        speed: 1.3 + Math.random() * 1.5, // Increased speed range
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
      ctx.clearRect(0, 0, width, height);

      time += 0.0018; 
      const config = getThemeConfig();
      const isMobile = width < 1024;
      const scrollY = window.scrollY;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mActive = mouseRef.current.active;
      const minMouseDist = 24;
      const activeRadius = 150;

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

        // Gravity pull from animated planets (tighter orbital pull: dirX * 0.75 + swirlX * 0.45)
        PLANETS.forEach((planet, i) => {
          const coords = updatedCoords[i];
          const dx = coords.x - p.x;
          const dy = coords.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < planet.gravityRadius && dist > 10) {
            const pull = (1 - dist / planet.gravityRadius) * planet.strength * 2.5;
            const dirX = dx / dist;
            const dirY = dy / dist;
            const swirlX = -dirY;
            const swirlY = dirX;

            // Shift focus towards the center of planet (0.75 pull, 0.45 swirl)
            totalForceX += (dirX * 0.75 + swirlX * 0.45) * pull * p.speed;
            totalForceY += (dirY * 0.75 + swirlY * 0.45) * pull * p.speed;
          }
        });

        // Mouse interaction (increased pull dirX * 1.3 to go closer to center before swirling)
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

              // Pull tighter to center (swirl 1.1, pull 1.1)
              totalForceX = totalForceX * (1 - influence * 0.3) + (swirlX * 1.1 + dirX * 1.1) * influence * p.speed;
              totalForceY = totalForceY * (1 - influence * 0.3) + (swirlY * 1.1 + dirY * 1.1) * influence * p.speed;
            } else {
              const push = (1 - dist / minMouseDist) * 0.5;
              totalForceX -= (dx / dist) * push * p.speed;
              totalForceY -= (dy / dist) * push * p.speed;
            }
          }
        }

        // Gentle constant pull towards vertical center column (X center)
        const centerX = width / 2;
        const dxCenter = centerX - p.x;
        const distCenter = Math.abs(dxCenter);
        if (distCenter > 40) {
          // pull force proportional to distance
          const pullCenter = (dxCenter / width) * 0.32 * p.speed;
          totalForceX += pullCenter;
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

        // Draw trail segment-by-segment with fading opacity
        if (p.history.length > 1) {
          for (let i = 1; i < p.history.length; i++) {
            const pt1 = p.history[i - 1];
            const pt2 = p.history[i];
            const opacity = i / p.history.length;

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

        // Respawn
        const outOfBounds = p.x < -20 || p.x > width + 20 || p.y < -20 || p.y > height + 20;
        if (p.life >= p.maxLife || outOfBounds) {
          particles[idx] = createParticle();
        }
      });

      // 3. Draw 3D Toy Planets
      PLANETS.forEach((planet, i) => {
        const coords = updatedCoords[i];

        ctx.save();
        ctx.globalAlpha = isMobile ? 0.25 : 1.0;

        // Render 3D planet
        draw3DPlanet(ctx, coords.x, coords.y, planet, time, config.isDark);

        // Text label
        if (!isMobile) {
          ctx.fillStyle = config.textColor;
          ctx.font = "bold 9px 'Geist Variable', sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(planet.name.toUpperCase(), coords.x, coords.y + planet.radius + 15);
        }

        ctx.restore();
      });

      // 4. Draw Interactive Concentric Cursor
      if (mActive) {
        ctx.beginPath();
        ctx.arc(mx, my, minMouseDist, 0, Math.PI * 2);
        ctx.strokeStyle = config.cursorRingColor;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(mx, my, 4, 0, Math.PI * 2);
        ctx.fillStyle = config.cursorColor;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    // Pre-warm particles
    ctx.fillStyle = document.documentElement.classList.contains("dark") ? "#111111" : "#ffffff";
    ctx.fillRect(0, 0, width, height);
    for (let i = 0; i < 50; i++) {
      time += 0.0018;
      particles.forEach((p) => {
        let angle =
          Math.sin(p.x * 0.0035 + time * 1.4) * 1.8 +
          Math.cos(p.y * 0.0035 + time * 1.1) * 1.8;
        p.vx = Math.cos(angle) * p.speed;
        p.vy = Math.sin(angle) * p.speed;
        p.x += p.vx;
        p.y += p.vy;
        p.life++;
      });
    }

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
