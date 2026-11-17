import type { ReactNode } from "react";

// Editorial section: 1px rule, large italic number and label on the left, content on the right.
export function Section({
  id,
  number,
  label,
  children,
}: {
  id: string;
  number: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-label`}
      className="relative mt-20 grid gap-6 pt-6 md:mt-24 md:grid-cols-[220px_1fr] md:gap-8"
    >
      <span aria-hidden="true" data-reveal className="section-rule absolute inset-x-0 top-0 h-px bg-ink" />
      <div>
        <p aria-hidden="true" className="font-serif text-[64px] leading-none text-accent italic">
          {number}
        </p>{" "}
        <h2
          id={`${id}-label`}
          className="mt-3 text-[13px] font-bold tracking-[0.08em] text-muted uppercase"
        >
          {label}
        </h2>
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

// Pill-shaped button: 56px high, or 44px ("sm") inside cards. "solid" is violet, "outline" follows the ink color.
export function pillClass(variant: "solid" | "outline" = "solid", size: "md" | "sm" = "md") {
  const dims = size === "md" ? "h-14 px-8 text-base" : "h-11 px-5 text-[15px]";
  const base = `inline-flex ${dims} items-center justify-center rounded-full font-bold transition-colors`;
  return variant === "solid"
    ? `${base} bg-btn text-on-violet hover:bg-btn-hover`
    : `${base} border-2 border-ink text-ink hover:border-accent hover:text-accent`;
}

// Small uppercase label in accent color, used inside cards.
export function Kicker({ children }: { children: ReactNode }) {
  return (
    <p className="text-[13px] font-bold tracking-[0.08em] text-accent uppercase">{children}</p>
  );
}
