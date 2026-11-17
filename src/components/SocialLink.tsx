"use client";

import type { CSSProperties, PointerEvent, ReactNode } from "react";

// External profile link whose brand-coloured highlight grows from the pointer
// position out to both edges (logo and text), and shrinks back where it leaves.
// Keyboard focus grows it from the centre. Styles: .social-link in globals.css.
export function SocialLink({ href, network, children }: { href: string; network: string; children: ReactNode }) {
  function trackPointer(event: PointerEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    event.currentTarget.style.setProperty("--x", `${Math.min(100, Math.max(0, x))}%`);
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onPointerEnter={trackPointer}
      onPointerLeave={trackPointer}
      style={{ "--brand": `var(--brand-${network})` } as CSSProperties}
      className="social-link inline-flex min-h-11 items-center gap-3 rounded-full pr-4 text-lg font-bold text-accent"
    >
      {children}
    </a>
  );
}
