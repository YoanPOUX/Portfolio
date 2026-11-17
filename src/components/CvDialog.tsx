"use client";

import { useId, useRef, useState } from "react";
import { closeOnBackdrop, DialogCloseButton } from "./DetailDialog";
import { pillClass } from "./Section";
import { useAnimatedDialog } from "./useAnimatedDialog";

const fileIcon = (
  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M12 18v-6" />
    <path d="m9 15 3 3 3-3" />
  </svg>
);

// CV button that opens a large dialog showing the PDF, with a download button.
// The PDF is only requested on first opening; browsers that cannot display a PDF
// inline (most mobile browsers) get links to open or download it instead.
export function CvDialog({
  label,
  href,
  hrefLang,
  t,
}: {
  label: string;
  href: string;
  hrefLang: string;
  t: { download: string; openTab: string; fallback: string; preview: string; close: string };
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { open: openDialog, close } = useAnimatedDialog(dialogRef, buttonRef);
  const [loaded, setLoaded] = useState(false);
  const titleId = useId();
  const fileName = href.split("/").pop();

  function open() {
    setLoaded(true);
    openDialog();
  }

  return (
    <>
      <button ref={buttonRef} type="button" onClick={open} aria-haspopup="dialog" className={`gap-2 ${pillClass("outline", "sm")}`}>
        {fileIcon}
        {label}
        <span className="sr-only"> ({t.preview})</span>
      </button>
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClick={(event) => closeOnBackdrop(event, close)}
        className="m-auto h-[min(92dvh,1100px)] w-[min(980px,calc(100%-24px))] overflow-hidden rounded-[28px] bg-card p-0 text-ink backdrop:bg-scrim"
      >
        <div className="flex h-full flex-col">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-rule px-5 py-4 md:px-7">
            <h3 id={titleId} className="font-serif text-[clamp(26px,3vw,32px)] leading-[1.1] font-normal">
              {label}
            </h3>
            <div className="flex items-center gap-2">
              <a href={href} download={fileName} className={`gap-2 ${pillClass("solid", "sm")}`}>
                {fileIcon}
                {t.download}
              </a>
              <DialogCloseButton label={t.close} onClose={close} />
            </div>
          </div>
          <div className="min-h-0 flex-1 bg-inset">
            {loaded && (
              <object data={href} type="application/pdf" aria-label={label} className="h-full w-full">
                <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center">
                  <p className="max-w-[360px] leading-relaxed text-muted">{t.fallback}</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <a href={href} hrefLang={hrefLang} target="_blank" rel="noopener" className={pillClass("outline", "sm")}>
                      {t.openTab}
                    </a>
                    <a href={href} download={fileName} className={pillClass("solid", "sm")}>
                      {t.download}
                    </a>
                  </div>
                </div>
              </object>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
