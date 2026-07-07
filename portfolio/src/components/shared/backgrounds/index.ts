import { createContext, useContext } from "react";

export type BackgroundType = "none" | "grid" | "flow" | "dots";

export interface Planet {
  name: string;
  symbol: string;
  selector: string;
  defaultYPercent: number; // fallback Y percent
  alignLeft: boolean; // true for left margin, false for right margin
  radius: number;
  gravityRadius: number;
  strength: number;
}

export const PLANETS: Planet[] = [
  {
    name: "Machine Learning",
    symbol: "🧬",
    selector: "#experience",
    defaultYPercent: 0.35,
    alignLeft: true,
    radius: 16, // Enlarge slightly for better procedural details visibility
    gravityRadius: 150,
    strength: 0.5,
  },
  {
    name: "Chess Engine",
    symbol: "♞",
    selector: "#projects",
    defaultYPercent: 0.65,
    alignLeft: false,
    radius: 14,
    gravityRadius: 140,
    strength: 0.48,
  },
  {
    name: "3D Graphics",
    symbol: "✦",
    selector: "#skills",
    defaultYPercent: 0.95,
    alignLeft: true,
    radius: 15,
    gravityRadius: 130,
    strength: 0.44,
  },
  {
    name: "Compilers",
    symbol: "λ",
    selector: "#certifications",
    defaultYPercent: 1.25,
    alignLeft: false,
    radius: 15,
    gravityRadius: 155,
    strength: 0.5,
  },
];

interface BackgroundContextType {
  activeBackground: BackgroundType;
  setActiveBackground: (bg: BackgroundType) => void;
}

export const BackgroundContext = createContext<BackgroundContextType>({
  activeBackground: "none",
  setActiveBackground: () => {},
});

export const useBackground = () => useContext(BackgroundContext);

function hexToRgba(hex: string, alpha: number): string {
  if (hex.startsWith("rgba")) return hex;
  const cleanHex = hex.replace("#", "");
  const r = parseInt(cleanHex.substring(0, 2), 16);
  const g = parseInt(cleanHex.substring(2, 4), 16);
  const b = parseInt(cleanHex.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

// Real 3D Procedural Planet Renderer inspired by Sebastian Lague's Unity graphics
export function draw3DPlanet(
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  planet: Planet,
  time: number,
  isDark: boolean
) {
  const r = planet.radius;
  const isMobile = ctx.canvas.width < 1024;

  // 1. Establish global Light Source at top-left of viewport (0, 0)
  const lx = cx - 0;
  const ly = cy - 0;
  const lightDist = Math.sqrt(lx * lx + ly * ly);
  const ldx = lx / lightDist; // Light direction vector
  const ldy = ly / lightDist;

  // 2. Setup Orbiting Moon physics
  const moonSpeed = 1.4;
  const moonAngle = time * moonSpeed + planet.radius; // Phase shift based on radius
  const moonOrbitX = r * 2.2;
  const moonOrbitY = r * 0.55; // Elliptical slant for perspective
  const moonRotAngle = -0.22; // Orbit inclination angle

  // Calculate moon screen coordinates relative to planet center
  const cosM = Math.cos(moonAngle);
  const sinM = Math.sin(moonAngle);
  const rawMoonX = cosM * moonOrbitX;
  const rawMoonY = sinM * moonOrbitY;
  
  // Rotate orbit coordinates for slanted inclination
  const mx = cx + (rawMoonX * Math.cos(moonRotAngle) - rawMoonY * Math.sin(moonRotAngle));
  const my = cy + (rawMoonX * Math.sin(moonRotAngle) + rawMoonY * Math.cos(moonRotAngle));
  const moonBehind = sinM < 0; // True if moon is on the far side of orbit

  // 3. Define planet colors and textures (procedural, serious palettes)
  let baseColor = "#334155"; // Slate
  let landColor = "#64748b";
  let cloudColor = "rgba(255, 255, 255, 0.22)";
  let ringColor = "rgba(148, 163, 184, 0.22)";

  if (planet.name === "Machine Learning") {
    // Terra (Earth-like)
    baseColor = isDark ? "#0f172a" : "#1e40af"; // Deep blue ocean
    landColor = isDark ? "#10b981" : "#34d399"; // Emerald green continents
    cloudColor = isDark ? "rgba(255, 255, 255, 0.25)" : "rgba(255, 255, 255, 0.4)";
  } else if (planet.name === "Chess Engine") {
    // Luna (Cratered Moon)
    baseColor = isDark ? "#52525b" : "#e4e4e7"; // Gray lunar surface
    landColor = isDark ? "#27272a" : "#a1a1aa"; // Dark gray maria plains
  } else if (planet.name === "3D Graphics") {
    // Gas giant with rings
    baseColor = isDark ? "#78350f" : "#f59e0b"; // Amber/gold gas giant
    landColor = isDark ? "#b45309" : "#fbbf24"; // Golden-orange stripe bands
    ringColor = isDark ? "rgba(245, 158, 11, 0.28)" : "rgba(217, 119, 6, 0.35)";
  } else if (planet.name === "Compilers") {
    // Gas Giant (Jupiter-like storm giant)
    baseColor = isDark ? "#2e1065" : "#c084fc"; // Deep violet / lavender
    landColor = isDark ? "#6d28d9" : "#e9d5ff"; // Purple stripes
  }

  // 4. Rayleigh/Mie Atmospheric Scattering Glow (Light source oriented)
  // Glow center offsetted towards the light source for realistic sunlit atmosphere halo
  ctx.save();
  const atmosphereRadius = r * 1.5;
  const ax = cx - ldx * r * 0.12;
  const ay = cy - ldy * r * 0.12;
  const atmoGlow = ctx.createRadialGradient(ax, ay, r * 0.8, ax, ay, atmosphereRadius);
  
  // Atmosphere color adapts to planet base theme
  const atmoColor = landColor;
  atmoGlow.addColorStop(0, hexToRgba(atmoColor, 0.22)); // Convert hex to rgba
  if (isDark) {
    atmoGlow.addColorStop(0.3, "rgba(179, 179, 241, 0.08)");
  } else {
    atmoGlow.addColorStop(0.3, "rgba(99, 102, 241, 0.05)");
  }
  atmoGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = atmoGlow;
  ctx.fillRect(cx - atmosphereRadius, cy - atmosphereRadius, atmosphereRadius * 2, atmosphereRadius * 2);
  ctx.restore();

  // 5. Draw Orbiting Moon (Back side, behind planet core)
  if (moonBehind) {
    ctx.save();
    // Moon sphere
    ctx.beginPath();
    ctx.arc(mx, my, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = landColor;
    ctx.fill();
    // Moon shading (oriented towards top-left light source)
    const moonShading = ctx.createRadialGradient(mx - 0.7, my - 0.7, 0.2, mx, my, 2.5);
    moonShading.addColorStop(0, "rgba(255, 255, 255, 0.3)");
    moonShading.addColorStop(0.5, "rgba(0, 0, 0, 0)");
    moonShading.addColorStop(1, "rgba(0, 0, 0, 0.85)");
    ctx.fillStyle = moonShading;
    ctx.fill();
    ctx.restore();
  }

  // 6. Draw Rings for "3D Graphics" (Back half)
  // Drawn behind the planet sphere to ensure correct occlusion
  if (planet.name === "3D Graphics") {
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(cx, cy, r * 2.3, r * 0.5, moonRotAngle, Math.PI, Math.PI * 2); // Back half arc
    ctx.strokeStyle = ringColor;
    ctx.lineWidth = 3.5;
    ctx.stroke();
    
    // Outer division ring (A Ring)
    ctx.beginPath();
    ctx.ellipse(cx, cy, r * 2.6, r * 0.58, moonRotAngle, Math.PI, Math.PI * 2);
    ctx.strokeStyle = ringColor.replace(/[\d.]+\)$/, "0.1)");
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.restore();
  }

  // 7. Draw Planet Core & Procedural Surface Textures (Clipped to sphere)
  ctx.save();
  ctx.beginPath();
  ctx.arc(cx, cy, r, 0, Math.PI * 2);
  ctx.clip(); // Mask texture drawing to sphere circle

  // Draw base surface
  ctx.fillStyle = baseColor;
  ctx.fill();

  // Draw procedural animated rotation textures (continents/craters/gas bands)
  ctx.fillStyle = landColor;
  const rotationWidth = r * 4;
  const rotationOffset = (time * 10) % rotationWidth;

  if (planet.name === "Machine Learning") {
    // Dynamic landmasses drifting horizontally
    for (let offset = -rotationWidth; offset < rotationWidth; offset += rotationWidth / 2) {
      const rx = cx + offset + rotationOffset;
      ctx.beginPath();
      // Organic shapes representing continents
      ctx.moveTo(rx - r * 0.5, cy - r * 0.3);
      ctx.bezierCurveTo(rx - r * 0.2, cy - r * 0.7, rx + r * 0.3, cy - r * 0.5, rx + r * 0.4, cy - r * 0.1);
      ctx.bezierCurveTo(rx + r * 0.5, cy + r * 0.3, rx + r * 0.1, cy + r * 0.6, rx - r * 0.3, cy + r * 0.4);
      ctx.bezierCurveTo(rx - r * 0.6, cy + r * 0.2, rx - r * 0.8, cy - r * 0.1, rx - r * 0.5, cy - r * 0.3);
      ctx.fill();
    }

    // Drifting cloud layer (moving at a different speed for 3D parallax depth)
    ctx.fillStyle = cloudColor;
    const cloudOffset = (time * 16) % rotationWidth;
    for (let offset = -rotationWidth; offset < rotationWidth; offset += rotationWidth / 2) {
      const rx = cx + offset + cloudOffset;
      ctx.beginPath();
      ctx.arc(rx - r * 0.3, cy - r * 0.4, r * 0.25, 0, Math.PI * 2);
      ctx.arc(rx + r * 0.2, cy + r * 0.2, r * 0.2, 0, Math.PI * 2);
      ctx.fillRect(rx - r * 0.3, cy - r * 0.4, r * 0.5, r * 0.15);
      ctx.fill();
    }
  } else if (planet.name === "Chess Engine") {
    // Gray Maria Plains (Moon spots)
    for (let offset = -rotationWidth; offset < rotationWidth; offset += rotationWidth / 2) {
      const rx = cx + offset + rotationOffset;
      ctx.beginPath();
      ctx.ellipse(rx - r * 0.3, cy - r * 0.2, r * 0.4, r * 0.25, 0.2, 0, Math.PI * 2);
      ctx.ellipse(rx + r * 0.4, cy + r * 0.3, r * 0.3, r * 0.18, -0.1, 0, Math.PI * 2);
      ctx.fill();
    }

    // Procedural Craters with shadows/highlights oriented to light direction
    const craters = [
      { ox: -r * 0.4, oy: -r * 0.3, size: r * 0.2 },
      { ox: r * 0.3, oy: r * 0.4, size: r * 0.15 },
      { ox: -r * 0.1, oy: r * 0.1, size: r * 0.26 },
      { ox: r * 0.5, oy: -r * 0.4, size: r * 0.12 },
    ];
    craters.forEach((crater) => {
      // Loop crater wrapping coordinates
      let x = cx + ((crater.ox + rotationOffset + r * 2) % (r * 4)) - r * 2;
      const y = cy + crater.oy;

      // Draw shadow background inside crater
      ctx.beginPath();
      ctx.arc(x, y, crater.size, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
      ctx.fill();

      // Draw light rim crescent (offset towards light source)
      ctx.beginPath();
      ctx.arc(x - ldx * 0.8, y - ldy * 0.8, crater.size, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.18)";
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Draw shadow rim crescent (offset away from light source)
      ctx.beginPath();
      ctx.arc(x + ldx * 0.8, y + ldy * 0.8, crater.size, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(0, 0, 0, 0.3)";
      ctx.lineWidth = 0.8;
      ctx.stroke();
    });
  } else if (planet.name === "3D Graphics" || planet.name === "Compilers") {
    // Gas giant horizontal band structures
    const bands = [
      { y: -r * 0.6, h: r * 0.2 },
      { y: -r * 0.2, h: r * 0.32 },
      { y: r * 0.25, h: r * 0.15 },
      { y: r * 0.55, h: r * 0.22 },
    ];
    bands.forEach((band) => {
      ctx.fillRect(cx - r, cy + band.y, r * 2, band.h);
    });

    // Swirling storm spots (Jupiter storms)
    ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
    for (let offset = -rotationWidth; offset < rotationWidth; offset += rotationWidth / 2) {
      const rx = cx + offset + rotationOffset;
      ctx.beginPath();
      ctx.ellipse(rx - r * 0.35, cy - r * 0.42, r * 0.2, r * 0.08, -0.05, 0, Math.PI * 2);
      ctx.ellipse(rx + r * 0.5, cy + r * 0.38, r * 0.16, r * 0.06, 0.05, 0, Math.PI * 2);
      ctx.fill();
    }

    // Great Red Spot (Jupiter compiler giant)
    if (planet.name === "Compilers") {
      let spotX = cx + ((rotationOffset + r * 2) % (r * 4)) - r * 2;
      // Draw concentric spot details
      ctx.beginPath();
      ctx.ellipse(spotX, cy + r * 0.15, r * 0.38, r * 0.25, 0.08, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? "#991b1b" : "#ef4444"; // Dark crimson spot
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(spotX - ldx * 0.5, cy + r * 0.15 - ldy * 0.5, r * 0.22, r * 0.15, 0.08, 0, Math.PI * 2);
      ctx.fillStyle = isDark ? "#ef4444" : "#fca5a5"; // Light center highlight
      ctx.fill();
    }

    // Saturn ring shadow cast onto planet surface (Offset away from light source)
    if (planet.name === "3D Graphics") {
      ctx.save();
      // Scale and offset shadow to reflect light angle
      ctx.beginPath();
      ctx.ellipse(cx + ldx * r * 0.15, cy + ldy * r * 0.1, r * 1.8, r * 0.25, moonRotAngle, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(0, 0, 0, 0.4)"; // Soft ring shadow
      ctx.fill();
      ctx.restore();
    }
  }

  // 8. Moon Shadow projected onto Planet surface (Depth trick)
  // If moon is in front, we project its shadow onto the sphere
  if (!moonBehind) {
    // Project shadow along light angle vector
    const shadowX = cx + cosM * r * 0.85 + ldx * r * 0.2;
    const shadowY = cy + sinM * r * 0.22 + ldy * r * 0.1;
    
    ctx.beginPath();
    ctx.arc(shadowX, shadowY, 2.0, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)"; // Soft fuzzy moon shadow
    ctx.fill();
  }

  // 9. 3D Spherical Shading & Night Side terminator (Linear light-angle gradient)
  // Start light highlight at top-left edge, fade to total black shadow on bottom-right
  const startX = cx - ldx * r;
  const startY = cy - ldy * r;
  const endX = cx + ldx * r;
  const endY = cy + ldy * r;

  const terminator = ctx.createLinearGradient(startX, startY, endX, endY);
  terminator.addColorStop(0, "rgba(255, 255, 255, 0.35)"); // Specular brightness
  terminator.addColorStop(0.38, "rgba(0, 0, 0, 0)"); // Zero shadow baseline
  terminator.addColorStop(0.72, "rgba(0, 0, 0, 0.65)"); // Soft terminator shadow
  terminator.addColorStop(1, "rgba(0, 0, 0, 0.94)"); // Pitch black night side
  ctx.fillStyle = terminator;
  ctx.fillRect(cx - r, cy - r, r * 2, r * 2);

  ctx.restore(); // End planet sphere texture clip

  // 10. Draw Saturn Rings (Front half, in front of planet core)
  if (planet.name === "3D Graphics") {
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(cx, cy, r * 2.3, r * 0.5, moonRotAngle, 0, Math.PI); // Front half arc
    ctx.strokeStyle = ringColor;
    ctx.lineWidth = 4.0;
    ctx.stroke();

    // Outer division ring (A Ring)
    ctx.beginPath();
    ctx.ellipse(cx, cy, r * 2.6, r * 0.58, moonRotAngle, 0, Math.PI);
    ctx.strokeStyle = ringColor.replace(/[\d.]+\)$/, "0.1)");
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.restore();
  }

  // 11. Draw Orbiting Moon (Front side, in front of planet core)
  if (!moonBehind) {
    ctx.save();
    ctx.beginPath();
    ctx.arc(mx, my, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = landColor;
    ctx.fill();

    // Moon shading (oriented towards light source)
    const moonShading = ctx.createRadialGradient(mx - 0.7, my - 0.7, 0.2, mx, my, 2.5);
    moonShading.addColorStop(0, "rgba(255, 255, 255, 0.3)");
    moonShading.addColorStop(0.5, "rgba(0, 0, 0, 0)");
    moonShading.addColorStop(1, "rgba(0, 0, 0, 0.85)");
    ctx.fillStyle = moonShading;
    ctx.fill();
    ctx.restore();
  }

  // 12. Soft overlaid math symbol in center of core
  ctx.save();
  ctx.globalAlpha = isMobile ? 0.22 : 0.55;
  ctx.fillStyle = isDark ? "#ffffff" : "#000000";
  ctx.font = "bold 9px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.shadowColor = isDark ? "black" : "white";
  ctx.shadowBlur = 2.5;
  ctx.fillText(planet.symbol, cx, cy);
  ctx.restore();
}

// Re-export background components for convenience
export { default as WarpedGridBackground } from "./WarpedGridBackground";
export { default as FlowFieldBackground } from "./FlowFieldBackground";
export { default as PhysicsDotsBackground } from "./PhysicsDotsBackground";
export { default as BackgroundSwitcher } from "./BackgroundSwitcher";
