"use client";

import Link from "next/link";
import { LOCALE_COOKIE, locales, type Locale } from "@/lib/i18n";

function remember(locale: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

export function LanguageSwitch({ current, label }: { current: Locale; label: string }) {
  return (
    <nav aria-label={label} className="flex gap-2">
      {locales.map((locale) => {
        const active = locale === current;
        return (
          <Link
            key={locale}
            href={`/${locale}`}
            hrefLang={locale}
            lang={locale}
            aria-current={active ? "page" : undefined}
            onClick={() => remember(locale)}
            className={
              active
                ? "grid size-11 place-items-center rounded-full bg-btn text-sm font-bold text-on-violet"
                : "grid size-11 place-items-center rounded-full border-2 border-ink text-sm font-bold text-ink transition-colors hover:border-accent hover:text-accent"
            }
          >
            {locale.toUpperCase()}
          </Link>
        );
      })}
    </nav>
  );
}
