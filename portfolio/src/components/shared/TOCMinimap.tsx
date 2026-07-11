"use client";

import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export interface TOCItemType {
  title: React.ReactNode;
  url: string;
  depth: number;
}

export interface TOCMinimapProps {
  items: TOCItemType[];
  className?: string;
}

export function TOCMinimap({ items, className }: Readonly<TOCMinimapProps>) {
  const itemIds = useMemo(
    () => items.map((item) => item.url.replace("#", "")),
    [items],
  );

  const activeHeading = useActiveHeading(itemIds);

  if (!items.length) {
    return null;
  }

  return (
    <div className={cn("w-18", className)}>
      <HoverCard openDelay={0} closeDelay={100}>
        <HoverCardTrigger asChild>
          <div className="flex max-h-[50dvh] flex-col items-end gap-2.5 overflow-hidden py-4 px-2 cursor-pointer select-none">
            {items.map((item) => {
              const isActive = item.url === `#${activeHeading ?? ""}`;
              return (
                <div
                  key={item.url}
                  data-depth={item.depth}
                  data-active={isActive}
                  className={cn(
                    "h-0.5 rounded-full bg-foreground/20 hover:bg-foreground/50 transition-all duration-300 ease-in-out",
                    item.depth === 2 ? "w-6" : item.depth === 3 ? "w-4" : "w-2",
                    "data-[active=true]:bg-primary data-[active=true]:w-8 data-[active=true]:h-0.75",
                  )}
                />
              );
            })}
          </div>
        </HoverCardTrigger>

        <HoverCardContent
          className="w-56 overflow-hidden p-0 duration-200 border-none bg-transparent shadow-none"
          align="end"
          side="left"
          sideOffset={8}
        >
          <div className="flex max-h-[50dvh] overflow-y-auto overscroll-contain bg-popover/90 backdrop-blur-md text-popover-foreground rounded-lg border border-border shadow-lg p-1.5">
            <ul className="flex size-full flex-col px-3 py-2 text-xs font-medium">
              {items.map((item) => {
                const isActive = item.url === `#${activeHeading ?? ""}`;
                return (
                  <li key={item.url} className="flex">
                    <a
                      href={item.url}
                      data-depth={item.depth}
                      data-active={isActive}
                      className={cn(
                        "w-full rounded-md px-2 py-1.5 transition-colors duration-200 text-left",
                        "text-muted-foreground hover:text-foreground hover:bg-muted/50",
                        "data-[active=true]:text-primary data-[active=true]:bg-primary/10 data-[active=true]:font-bold",
                        item.depth === 3 && "pl-4",
                        item.depth === 4 && "pl-6",
                      )}
                      onClick={handleItemClick}
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </HoverCardContent>
      </HoverCard>
    </div>
  );
}

function useActiveHeading(itemIds: string[]) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "0% 0% -60% 0%", threshold: 0.1 },
    );

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    for (const id of itemIds ?? []) {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    }

    return () => {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      for (const id of itemIds ?? []) {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      }
    };
  }, [itemIds]);

  return activeId;
}

function handleItemClick(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  const url = e.currentTarget.getAttribute("href") ?? "";
  scrollToHeading(url);
}

function scrollToHeading(url: string) {
  history.pushState(null, "", url);
  document.getElementById(url.replace("#", ""))?.scrollIntoView({
    behavior: "smooth",
  });
}
