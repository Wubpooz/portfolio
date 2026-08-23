import { useEffect, useRef } from "react";
import { PLANETS, draw3DPlanet } from "./index";

export default function WarpedGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  // Track animated planet coordinates (screen space)
  const planetCoordsRef = useRef(
    PLANETS.map((planet) => ({
      x: planet.alignLeft ? 50 : window.innerWidth - 50,
      y: window.innerHeight * planet.defaultYPercent,
    })),
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let time = 0;

    // 3D Gravity Funnel configuration
    const gridSpacing = 42; // Grid spacing
    const segmentLength = 6; // Smaller segments for ultra-smooth curves
    const focalLength = 150; // Camera focal length for perspective depth

    // Mouse gravity well properties
    const mouseRadius = 180;
    const mouseZMax = 340; // Deep funnel depth

    // Cache absolute document-relative Y centers of each selector to eliminate getBoundingClientRect in RAF loop
    const elementCenters: Record<string, number | undefined> = {};

    const updateElementCenters = () => {
      PLANETS.forEach((planet) => {
        const el = document.querySelector(planet.selector);
        if (el) {
          const rect = el.getBoundingClientRect();
          elementCenters[planet.selector] =
            rect.top + window.scrollY + rect.height / 2;
        }
      });
    };

    updateElementCenters();
    const centersTimeout = setTimeout(updateElementCenters, 200);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      updateElementCenters();
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
        gridColor: isDark
          ? "rgba(255, 255, 255, 0.05)"
          : "rgba(0, 0, 0, 0.012)",
        mouseGlow: isDark
          ? "rgba(179, 179, 241, 0.12)"
          : "rgba(179, 179, 241, 0.06)",
        textColor: isDark ? "rgba(255, 255, 255, 0.35)" : "rgba(0, 0, 0, 0.38)",
        planetGlow: isDark
          ? "rgba(255, 255, 255, 0.025)"
          : "rgba(0, 0, 0, 0.015)",
      };
    };

    // Calculate warped point coordinate using 3D perspective gravity well projections
    // and perpetual spacetime contraction flow based on ScienceClic's 4D model
    const getWarpedPoint = (
      px: number,
      py: number,
      mx: number,
      my: number,
      mActive: boolean,
      animatedCoords: { x: number; y: number }[],
    ) => {
      let x = px;
      let y = py;
      let totalAlphaMult = 1.0;

      // Time multiplier for smooth, perpetual contracting flow
      const flowTime = time * 220;

      // 1. Apply Planets Gravity (Gaussian 3D Funnel with Fluid Perpetual Flow)
      PLANETS.forEach((planet, i) => {
        const coords = animatedCoords[i];
        const dx = px - coords.x;
        const dy = py - coords.y;
        const dist = Math.hypot(dx, dy);

        // Gaussian gravity well extends up to 2.2x gravityRadius for smooth blending
        const maxDist = planet.gravityRadius * 2.2;
        if (dist < maxDist) {
          // Smooth Gaussian curve instead of polynomial for fluid, organic bends
          const factor = Math.exp(
            -Math.pow(dist / (planet.gravityRadius * 0.65), 2),
          );

          // Spacetime contraction flow: coordinates slide inward towards the center.
          // We use a wave phase moving radially inward to create a seamless flow.
          const wavePhase = dist / gridSpacing - flowTime / gridSpacing;
          const flowWave = Math.sin(wavePhase * Math.PI * 2);

          // Apply flow deformation along the radial vector
          const flowAmt = flowWave * 7.5 * factor;

          // Z-depth of the funnel (curvature of spacetime)
          const Z = factor * 420;
          const scale = focalLength / (focalLength + Z);

          // Deform relative coordinates first, then project to screen space
          const rx = dx + (dx / (dist + 0.1)) * flowAmt;
          const ry = dy + (dy / (dist + 0.1)) * flowAmt;

          x = coords.x + rx * scale;
          y = coords.y + ry * scale;

          // Fade grid lines as they plunge deeper into the funnel
          totalAlphaMult *= scale * 1.05;
        }
      });

      // 2. Apply Mouse Gravity (Gaussian 3D Funnel with Fluid Perpetual Flow)
      if (mActive) {
        const dx = x - mx;
        const dy = y - my;
        const dist = Math.hypot(dx, dy);
        const maxDist = mouseRadius * 2.2;

        if (dist < maxDist) {
          const factor = Math.exp(-Math.pow(dist / (mouseRadius * 0.65), 2));
          const wavePhase = dist / gridSpacing - flowTime / gridSpacing;
          const flowWave = Math.sin(wavePhase * Math.PI * 2);
          const flowAmt = flowWave * 7.5 * factor;

          const Z = factor * mouseZMax;
          const scale = focalLength / (focalLength + Z);

          const rx = dx + (dx / (dist + 0.1)) * flowAmt;
          const ry = dy + (dy / (dist + 0.1)) * flowAmt;

          x = mx + rx * scale;
          y = my + ry * scale;
          totalAlphaMult *= scale * 1.05;
        }
      }

      return { x, y, alpha: Math.min(1.2, Math.max(0, totalAlphaMult)) };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.0012;

      const colors = getThemeColors();
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mActive = mouseRef.current.active;
      const isMobile = width < 1024;

      // Update Planet Positions based on DOM section scroll positions
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
        let ty = height * planet.defaultYPercent - window.scrollY;
        const center = elementCenters[planet.selector];
        if (center !== undefined) {
          ty = center - window.scrollY;
        }

        const nextX = prev.x + (tx - prev.x) * 0.08;
        const nextY = prev.y + (ty - prev.y) * 0.08;

        planetCoordsRef.current[i] = { x: nextX, y: nextY };
        return { x: nextX, y: nextY };
      });

      // 1. Draw Mouse Glow
      if (mActive) {
        const gradient = ctx.createRadialGradient(
          mx,
          my,
          0,
          mx,
          my,
          mouseRadius,
        );
        gradient.addColorStop(0, colors.mouseGlow);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      // 2. Draw Planet Glows
      PLANETS.forEach((planet, i) => {
        const coords = updatedCoords[i];
        const glowRadius = planet.gravityRadius * 0.7;

        ctx.save();
        ctx.globalAlpha = isMobile ? 0.35 : 1.0;

        const gradient = ctx.createRadialGradient(
          coords.x,
          coords.y,
          0,
          coords.x,
          coords.y,
          glowRadius,
        );
        gradient.addColorStop(0, colors.planetGlow);
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
      });

      // Split base color for alpha manipulation
      const baseGridColorParts = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(
        colors.gridColor,
      );
      const rgbPrefix = baseGridColorParts
        ? `${baseGridColorParts[1]}, ${baseGridColorParts[2]}, ${baseGridColorParts[3]}`
        : "148, 163, 184";
      const baseAlpha = baseGridColorParts
        ? Number.parseFloat(colors.gridColor.replace(/[^,]+$/, ""))
        : 0.05;

      // 3. Draw Vertical Grid Lines
      ctx.lineWidth = 1;

      // Draw grid slightly extended beyond borders to handle warping corners
      const borderMargin = 120;
      for (let x = -borderMargin; x < width + borderMargin; x += gridSpacing) {
        ctx.beginPath();
        let first = true;

        for (
          let y = -borderMargin;
          y < height + borderMargin;
          y += segmentLength
        ) {
          const warped = getWarpedPoint(x, y, mx, my, mActive, updatedCoords);

          if (first) {
            ctx.moveTo(warped.x, warped.y);
            first = false;
          } else {
            // Draw segment-by-segment to dynamically apply 3D alpha fading
            ctx.lineTo(warped.x, warped.y);
            ctx.strokeStyle = `rgba(${rgbPrefix}, ${String(baseAlpha * warped.alpha)})`;
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(warped.x, warped.y);
          }
        }
      }

      // 4. Draw Horizontal Grid Lines
      for (let y = -borderMargin; y < height + borderMargin; y += gridSpacing) {
        ctx.beginPath();
        let first = true;

        for (
          let x = -borderMargin;
          x < width + borderMargin;
          x += segmentLength
        ) {
          const warped = getWarpedPoint(x, y, mx, my, mActive, updatedCoords);

          if (first) {
            ctx.moveTo(warped.x, warped.y);
            first = false;
          } else {
            ctx.lineTo(warped.x, warped.y);
            ctx.strokeStyle = `rgba(${rgbPrefix}, ${String(baseAlpha * warped.alpha)})`;
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(warped.x, warped.y);
          }
        }
      }

      // 5. Draw 3D Procedural Toy Planets
      PLANETS.forEach((planet, i) => {
        const coords = updatedCoords[i];

        ctx.save();
        ctx.globalAlpha = isMobile ? 0.25 : 1.0;

        // Orbital ring
        ctx.beginPath();
        ctx.arc(
          coords.x,
          coords.y,
          planet.gravityRadius * 0.45,
          0,
          Math.PI * 2,
        );
        ctx.strokeStyle = colors.isDark
          ? "rgba(255, 255, 255, 0.015)"
          : "rgba(0, 0, 0, 0.015)";
        ctx.lineWidth = 1;
        ctx.stroke();

        // Render 3D planet
        draw3DPlanet(ctx, coords.x, coords.y, planet, time, colors.isDark);

        // Render text label
        if (!isMobile) {
          ctx.fillStyle = colors.textColor;
          ctx.font = "bold 9px 'Geist Variable', sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(
            planet.name.toUpperCase(),
            coords.x,
            coords.y + planet.radius + 15,
          );
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(centersTimeout);
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
