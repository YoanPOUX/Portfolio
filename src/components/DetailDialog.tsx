"use client";

import { useId, useRef, type MouseEvent, type ReactNode } from "react";
import { pillClass } from "./Section";
import { useAnimatedDialog } from "./useAnimatedDialog";

// Card button that opens a native modal <dialog>, growing out of the button and
// shrinking back into it. Escape, backdrop click and the close button all close it;
// the browser traps focus and restores it to the button.
export function DetailDialog({
  buttonLabel,
  closeLabel,
  title,
  subtitle,
  children,
}: {
  buttonLabel: string;
  closeLabel: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { open, close } = useAnimatedDialog(dialogRef, buttonRef);
  const titleId = useId();

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        className={pillClass("outline", "sm")}
      >
        {buttonLabel}
        <span className="sr-only">, {title}</span>
      </button>
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClick={(event) => closeOnBackdrop(event, close)}
        className="m-auto max-h-[min(88dvh,900px)] w-[min(760px,calc(100%-24px))] overflow-hidden rounded-[28px] bg-card p-0 text-ink backdrop:bg-scrim"
      >
        <div className="max-h-[min(88dvh,900px)] overflow-y-auto overscroll-contain p-6 md:p-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              {subtitle && (
                <p className="text-[13px] font-bold tracking-[0.08em] text-accent uppercase">{subtitle}</p>
              )}
              <h3 id={titleId} className="mt-1 font-serif text-[clamp(30px,4vw,40px)] leading-[1.1] font-normal">
                {title}
              </h3>
            </div>
            <DialogCloseButton label={closeLabel} onClose={close} />
          </div>
          <div className="mt-6">{children}</div>
        </div>
      </dialog>
    </>
  );
}

// The dialog's content fills it, so a click on the dialog element itself is on the backdrop.
export function closeOnBackdrop(event: MouseEvent<HTMLDialogElement>, close: () => void) {
  if (event.target === event.currentTarget) close();
}

// Round × button that closes its dialog through the animated close.
export function DialogCloseButton({ label, onClose }: { label: string; onClose: () => void }) {
  return (
    <button
      type="button"
      onClick={onClose}
      aria-label={label}
      className="grid size-11 shrink-0 place-items-center rounded-full bg-inset text-ink transition-colors hover:text-accent"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M6 6l12 12M18 6L6 18" />
      </svg>
    </button>
  );
}
