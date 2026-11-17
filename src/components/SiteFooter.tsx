import type { Dictionary, Locale } from "@/lib/i18n";
import { legalPaths } from "@/lib/site";
import { CurrentYear } from "./CurrentYear";

const linkClass = "underline underline-offset-4 hover:text-accent";

export function SiteFooter({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const f = dict.footer;
  return (
    <footer className="mt-24 border-t border-rule">
      <div className="mx-auto flex max-w-[1176px] flex-col gap-2 px-5 py-8 text-sm text-muted md:flex-row md:justify-between md:px-4">
        <p className="flex flex-wrap gap-x-4 gap-y-1">
          <span>
            © <CurrentYear /> {f.owner}
          </span>
          <a href={`/${lang}/${legalPaths.legal}`} className={linkClass}>
            {f.legal}
          </a>
          <a href={`/${lang}/${legalPaths.privacy}`} className={linkClass}>
            {f.privacy}
          </a>
        </p>
        <p>{f.colophon}</p>
      </div>
    </footer>
  );
}
