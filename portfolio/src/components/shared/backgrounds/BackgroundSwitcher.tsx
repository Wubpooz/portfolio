import { useState } from "react";
import { useBackground, type BackgroundType } from "./index";
import { Sparkles, Grid, Wind, Dot, EyeOff, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const backgrounds: { type: BackgroundType; label: string; icon: React.ElementType }[] = [
  { type: "none", label: "None", icon: EyeOff },
  { type: "grid", label: "Warped Grid", icon: Grid },
  { type: "flow", label: "Flow Field", icon: Wind },
  { type: "dots", label: "Physics Dots", icon: Dot },
];

export default function BackgroundSwitcher() {
  const { activeBackground, setActiveBackground } = useBackground();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 font-sans select-none">
      {/* Menu Options */}
      {isOpen && (
        <div
          className={cn(
            "flex flex-col gap-1.5 p-2 rounded-2xl border border-border bg-background/80 backdrop-blur-md shadow-lg transition-all duration-200 ease-out translate-y-0 opacity-100 scale-100 origin-bottom-right",
          )}
        >
          <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground border-b border-border/50 mb-1">
            Backgrounds
          </div>
          {backgrounds.map((bg) => {
            const Icon = bg.icon;
            const isActive = activeBackground === bg.type;
            return (
              <button
                key={bg.type}
                type="button"
                onClick={() => {
                  setActiveBackground(bg.type);
                  // Optional: close on select for better mobile experience
                  setIsOpen(false);
                }}
                className={cn(
                  "flex items-center justify-between gap-6 px-3 py-1.5 rounded-lg text-xs font-medium text-left transition-colors cursor-pointer",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-muted/60 text-muted-foreground hover:text-foreground",
                )}
              >
                <div className="flex items-center gap-2">
                  <Icon
                    className={cn(
                      "size-3.5",
                      isActive ? "text-primary" : "text-muted-foreground",
                    )}
                  />
                  {bg.label}
                </div>
                {isActive && (
                  <Check className="size-3 text-primary stroke-[3px]" />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        type="button"
        onClick={() => { setIsOpen(!isOpen); }}
        className={cn(
          "flex size-11 items-center justify-center rounded-full border border-border bg-background/80 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-foreground",
          isOpen
            ? "border-primary/50 text-primary rotate-45"
            : "hover:border-primary/30",
        )}
        aria-label="Toggle background options"
      >
        <Sparkles className="size-5 transition-transform" />
      </button>
    </div>
  );
}
