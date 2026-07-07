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
    radius: 9,
    gravityRadius: 150,
    strength: 0.5,
  },
  {
    name: "Chess Engine",
    symbol: "♞",
    selector: "#projects",
    defaultYPercent: 0.65,
    alignLeft: false,
    radius: 8,
    gravityRadius: 140,
    strength: 0.48,
  },
  {
    name: "3D Graphics",
    symbol: "✦",
    selector: "#skills",
    defaultYPercent: 0.95,
    alignLeft: true,
    radius: 8,
    gravityRadius: 130,
    strength: 0.44,
  },
  {
    name: "Compilers",
    symbol: "λ",
    selector: "#certifications",
    defaultYPercent: 1.25,
    alignLeft: false,
    radius: 9,
    gravityRadius: 155,
    strength: 0.5,
  },
];

interface BackgroundContextType {
  activeBackground: BackgroundType;
  setActiveBackground: (bg: BackgroundType) => void;
}

// Default context values
export const BackgroundContext = createContext<BackgroundContextType>({
  activeBackground: "none",
  setActiveBackground: () => {},
});

export const useBackground = () => useContext(BackgroundContext);

// Re-export background components for convenience
export { default as WarpedGridBackground } from "./WarpedGridBackground";
export { default as FlowFieldBackground } from "./FlowFieldBackground";
export { default as PhysicsDotsBackground } from "./PhysicsDotsBackground";
export { default as BackgroundSwitcher } from "./BackgroundSwitcher";
