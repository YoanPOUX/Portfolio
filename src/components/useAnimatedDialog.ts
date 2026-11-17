"use client";

import { useCallback, useEffect, useRef, type RefObject } from "react";

// Overshoots past its target, then settles: the bounce on opening.
const OPEN_EASING = "cubic-bezier(0.34, 1.56, 0.64, 1)";
// Pulls back slightly before shrinking: the bounce on closing.
const CLOSE_EASING = "cubic-bezier(0.36, 0, 0.66, -0.56)";

// Transform that maps the dialog box onto its trigger button.
function toTrigger(dialog: HTMLElement, trigger: HTMLElement) {
  const d = dialog.getBoundingClientRect();
  const t = trigger.getBoundingClientRect();
  const dx = t.left + t.width / 2 - (d.left + d.width / 2);
  const dy = t.top + t.height / 2 - (d.top + d.height / 2);
  return `translate(${dx}px, ${dy}px) scale(${t.width / d.width}, ${t.height / d.height})`;
}

function animateBackdrop(dialog: HTMLElement, from: number, to: number, duration: number) {
  try {
    return dialog.animate([{ opacity: from }, { opacity: to }], { duration, pseudoElement: "::backdrop", fill: "forwards" });
  } catch {
    return null; // ::backdrop animation not supported: the backdrop just appears.
  }
}

// Opens a modal <dialog> by growing it out of its trigger button and closes it back
// into the button, with a bounce both ways. Escape, backdrop clicks and close buttons
// should all go through `close` so the animation plays.
export function useAnimatedDialog(
  dialogRef: RefObject<HTMLDialogElement | null>,
  triggerRef: RefObject<HTMLElement | null>,
) {
  const closing = useRef(false);

  const open = useCallback(() => {
    const dialog = dialogRef.current;
    const trigger = triggerRef.current;
    if (!dialog || dialog.open) return;
    dialog.getAnimations({ subtree: true }).forEach((a) => a.cancel());
    dialog.showModal();
    if (!trigger || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    dialog.animate(
      [
        { transform: toTrigger(dialog, trigger), opacity: 0.3 },
        { transform: "none", opacity: 1 },
      ],
      { duration: 520, easing: OPEN_EASING },
    );
    animateBackdrop(dialog, 0, 1, 300);
  }, [dialogRef, triggerRef]);

  const close = useCallback(() => {
    const dialog = dialogRef.current;
    const trigger = triggerRef.current;
    if (!dialog?.open || closing.current) return;
    if (!trigger || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      dialog.close();
      return;
    }
    closing.current = true;
    const shrink = dialog.animate(
      [
        { transform: "none", opacity: 1 },
        { transform: toTrigger(dialog, trigger), opacity: 0.3 },
      ],
      { duration: 420, easing: CLOSE_EASING, fill: "forwards" },
    );
    animateBackdrop(dialog, 1, 0, 420);
    shrink.finished
      .catch(() => undefined)
      .then(() => {
        dialog.close();
        dialog.getAnimations({ subtree: true }).forEach((a) => a.cancel());
        closing.current = false;
      });
  }, [dialogRef, triggerRef]);

  // Escape fires "cancel": run the closing animation instead of closing at once.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onCancel = (event: Event) => {
      event.preventDefault();
      close();
    };
    dialog.addEventListener("cancel", onCancel);
    return () => dialog.removeEventListener("cancel", onCancel);
  }, [dialogRef, close]);

  return { open, close };
}
