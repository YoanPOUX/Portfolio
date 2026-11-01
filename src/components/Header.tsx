import type { Dictionary, Locale } from "@/lib/i18n";
import { sectionIds } from "@/lib/site";
import { LanguageSwitch } from "./LanguageSwitch";
import { ThemeToggle } from "./ThemeToggle";

export function Header({ dict, lang }: { dict: Dictionary; lang: Locale }) {
  const links = [
    { id: sectionIds.freelance, label: dict.nav.freelance },
    { id: sectionIds.journey, label: dict.nav.journey },
    { id: sectionIds.skills, label: dict.nav.skills },
    { id: sectionIds.other, label: dict.nav.other },
    { id: sectionIds.contact, label: dict.nav.contact },
  ];

  return (
    <header className="flex flex-col gap-3 py-4 md:flex-row md:items-center md:justify-between">
      <a href={`/${lang}`} className="font-serif text-2xl leading-none text-ink">
        {dict.hero.firstName} {dict.hero.lastName}
      </a>
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
        <nav aria-label={dict.a11y.mainNav}>
          <ul className="flex flex-wrap">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="inline-flex min-h-11 items-center px-3 text-[15px] text-muted transition-colors hover:text-accent md:px-[13px]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-2 px-2 md:px-0">
          <ThemeToggle toDark={dict.a11y.themeToDark} toLight={dict.a11y.themeToLight} />
          <LanguageSwitch current={lang} label={dict.a11y.languageSwitch} />
        </div>
      </div>
    </header>
  );
}
