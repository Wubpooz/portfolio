import { useEffect, useRef } from "react";
import { PLANETS } from "./index";

export default function WarpedGridBackground() {
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

    // Grid configuration
    const gridSpacing = 40;
    const mouseRadius = 160;
    const mouseStrength = 0.4;
    const segmentLength = 10;

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

    const getThemeColors = () => {
      const isDark = document.documentElement.classList.contains("dark");
      return {
        isDark,
        gridColor: isDark ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.04)",
        mouseGlow: isDark ? "rgba(179, 179, 241, 0.12)" : "rgba(179, 179, 241, 0.06)",
        textColor: isDark ? "rgba(255, 255, 255, 0.35)" : "rgba(0, 0, 0, 0.38)",
        planetCoreBg: isDark ? "#1a1a1a" : "#ffffff",
        planetBorder: isDark ? "rgba(179, 179, 241, 0.3)" : "rgba(179, 179, 241, 0.35)",
        planetGlow: isDark ? "rgba(255, 255, 255, 0.02)" : "rgba(0, 0, 0, 0.015)",
        planetSymbol: isDark ? "rgba(255, 255, 255, 0.6)" : "rgba(0, 0, 0, 0.6)",
      };
    };

    // Calculate warped point coordinate based on animated coordinates
    const getWarpedPoint = (
      px: number,
      py: number,
      mx: number,
      my: number,
      mActive: boolean,
      animatedCoords: { x: number; y: number }[]
    ) => {
      let finalX = px;
      let finalY = py;

      // 1. Mouse Warp
      if (mActive) {
        const dx = px - mx;
        const dy = py - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseRadius) {
          const factor = Math.pow(1 - dist / mouseRadius, 2);
          finalX -= dx * factor * mouseStrength;
          finalY -= dy * factor * mouseStrength;
        }
      }

      // 2. Planets Warp
      PLANETS.forEach((planet, i) => {
        const coords = animatedCoords[i];
        const dx = px - coords.x;
        const dy = py - coords.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < planet.gravityRadius) {
          const factor = Math.pow(1 - dist / planet.gravityRadius, 2);
          finalX -= dx * factor * planet.strength;
          finalY -= dy * factor * planet.strength;
        }
      });

      return { x: finalX, y: finalY };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const colors = getThemeColors();
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mActive = mouseRef.current.active;
      const isMobile = width < 1024;

      // Update Planet Positions based on DOM section scroll positions
      const updatedCoords = PLANETS.map((planet, i) => {
        const prev = planetCoordsRef.current[i];
        
        // Target X: placement in margin
        const contentWidth = 920; // max-width of content
        let tx = planet.alignLeft
          ? width / 2 - contentWidth / 2 - 80
          : width / 2 + contentWidth / 2 + 80;

        // Constraint to screen edges
        if (planet.alignLeft) {
          tx = Math.max(tx, 45);
        } else {
          tx = Math.min(tx, width - 45);
        }

        // Target Y: locate DOM element
        let ty = height * planet.defaultYPercent - window.scrollY;
        const el = document.querySelector(planet.selector);
        if (el) {
          const rect = el.getBoundingClientRect();
          ty = rect.top + rect.height / 2;
        }

        // Interpolate (lerp) for smooth scroll lag
        const nextX = prev.x + (tx - prev.x) * 0.08;
        const nextY = prev.y + (ty - prev.y) * 0.08;

        planetCoordsRef.current[i] = { x: nextX, y: nextY };
        return { x: nextX, y: nextY };
      });

      // 1. Draw Mouse Glow
      if (mActive) {
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, mouseRadius);
        gradient.addColorStop(0, colors.mouseGlow);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      // 2. Draw Planet Glows (Subtle, desaturated)
      PLANETS.forEach((planet, i) => {
        const coords = updatedCoords[i];
        const glowRadius = planet.gravityRadius * 0.7;

        // Reduce opacity on mobile/overlapping layouts
        const alphaFactor = isMobile ? 0.35 : 1.0;
        ctx.save();
        ctx.globalAlpha = alphaFactor;

        const gradient = ctx.createRadialGradient(coords.x, coords.y, 0, coords.x, coords.y, glowRadius);
        gradient.addColorStop(0, colors.planetGlow);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
      });

      // 3. Draw Vertical Grid Lines
      ctx.lineWidth = 1;
      ctx.strokeStyle = colors.gridColor;

      for (let x = 0; x < width + gridSpacing; x += gridSpacing) {
        ctx.beginPath();
        let first = true;

        for (let y = 0; y < height + segmentLength; y += segmentLength) {
          const warped = getWarpedPoint(x, y, mx, my, mActive, updatedCoords);
          if (first) {
            ctx.moveTo(warped.x, warped.y);
            first = false;
          } else {
            ctx.lineTo(warped.x, warped.y);
          }
        }
        ctx.stroke();
      }

      // 4. Draw Horizontal Grid Lines
      for (let y = 0; y < height + gridSpacing; y += gridSpacing) {
        ctx.beginPath();
        let first = true;

        for (let x = 0; x < width + segmentLength; x += segmentLength) {
          const warped = getWarpedPoint(x, y, mx, my, mActive, updatedCoords);
          if (first) {
            ctx.moveTo(warped.x, warped.y);
            first = false;
          } else {
            ctx.lineTo(warped.x, warped.y);
          }
        }
        ctx.stroke();
      }

      // 5. Draw Planet Core & Text Labels
      PLANETS.forEach((planet, i) => {
        const coords = updatedCoords[i];
        
        ctx.save();
        // Soft opacity on narrow/mobile viewports
        ctx.globalAlpha = isMobile ? 0.25 : 1.0;

        // Orbital ring
        ctx.beginPath();
        ctx.arc(coords.x, coords.y, planet.gravityRadius * 0.45, 0, Math.PI * 2);
        ctx.strokeStyle = colors.isDark ? "rgba(255, 255, 255, 0.015)" : "rgba(0, 0, 0, 0.015)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Planet core
        ctx.beginPath();
        ctx.arc(coords.x, coords.y, planet.radius, 0, Math.PI * 2);
        ctx.fillStyle = colors.planetCoreBg;
        ctx.strokeStyle = colors.planetBorder;
        ctx.lineWidth = 1.2;
        ctx.fill();
        ctx.stroke();

        // Symbol
        ctx.fillStyle = colors.planetSymbol;
        ctx.font = "9px sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(planet.symbol, coords.x, coords.y);

        // Render text label ONLY on wider screens so it doesn't overlap text on mobile
        if (!isMobile) {
          ctx.fillStyle = colors.textColor;
          ctx.font = "bold 9px 'Geist Variable', sans-serif";
          ctx.fillText(planet.name.toUpperCase(), coords.x, coords.y + planet.radius + 14);
        }

        ctx.restore();
      });

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
