import type { ReactNode } from "react";
import type { Dictionary, Locale } from "@/lib/i18n";
import { Header } from "./Header";
import { RevealObserver } from "./RevealObserver";
import { SiteFooter } from "./SiteFooter";

// Skip link, header, main content and footer, shared by the home and legal pages.
export function PageShell({
  dict,
  lang,
  path,
  children,
}: {
  dict: Dictionary;
  lang: Locale;
  path?: string;
  children: ReactNode;
}) {
  return (
    <>
      <a
        href="#contenu"
        className="sr-only rounded-full bg-btn px-5 py-3 font-bold text-on-violet focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
      >
        {dict.a11y.skipToContent}
      </a>
      <div className="mx-auto max-w-[1176px] px-5 md:px-4">
        <Header dict={dict} lang={lang} path={path} />
        <main id="contenu">
          {children}
          <RevealObserver />
        </main>
      </div>
      <SiteFooter dict={dict} lang={lang} />
    </>
  );
}
