"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Fills the timeline's vertical line as the reader scrolls past it, and marks each
// [data-timeline-dot] once the reading line (60% of the viewport) has reached it.
export function TimelineProgress({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const fill = fillRef.current;
    if (!root || !fill) return;
    const dots = root.querySelectorAll<HTMLElement>("[data-timeline-dot]");
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.6;
      const rect = root.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (line - rect.top) / rect.height));
      fill.style.transform = `scaleY(${progress})`;
      dots.forEach((dot) => {
        dot.dataset.reached = String(dot.getBoundingClientRect().top < line);
      });
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <span
        ref={fillRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-0.5 origin-top bg-accent"
        style={{ transform: "scaleY(0)" }}
      />
      {children}
    </div>
  );
}
