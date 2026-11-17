"use client";

import { useSyncExternalStore, type MouseEvent } from "react";

type Theme = "light" | "dark";

function savedTheme(): string | null {
  try {
    return localStorage.getItem("theme");
  } catch {
    return null;
  }
}

function applyTheme(theme: Theme) {
  if (theme === "dark") document.documentElement.dataset.theme = "dark";
  else delete document.documentElement.dataset.theme;
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributeFilter: ["data-theme"] });
  // Without a saved choice, follow the system theme when it changes.
  const system = matchMedia("(prefers-color-scheme: dark)");
  const onSystemChange = () => {
    if (!savedTheme()) applyTheme(system.matches ? "dark" : "light");
  };
  system.addEventListener("change", onSystemChange);
  return () => {
    observer.disconnect();
    system.removeEventListener("change", onSystemChange);
  };
}

function getTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function ThemeToggle({ toDark, toLight }: { toDark: string; toLight: string }) {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light" as Theme);
  const isDark = theme === "dark";

  function toggle(event: MouseEvent<HTMLButtonElement>) {
    const next: Theme = isDark ? "light" : "dark";
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Storage unavailable (private mode): the choice lasts for this page only.
    }
    if (!document.startViewTransition || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      applyTheme(next);
      return;
    }
    // The new theme is revealed in a circle growing from the button to the farthest corner.
    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
    const root = document.documentElement;
    root.dataset.transition = "theme";
    const transition = document.startViewTransition(() => applyTheme(next));
    transition.ready.then(() => {
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: 650, easing: "cubic-bezier(0.65, 0, 0.35, 1)", pseudoElement: "::view-transition-new(root)" },
      );
    });
    transition.finished.finally(() => delete root.dataset.transition);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={isDark ? toLight : toDark}
      className="grid size-11 place-items-center rounded-full bg-inset text-ink transition-colors hover:text-accent"
    >
      {isDark ? (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
        </svg>
      )}
    </button>
  );
}
