import Image from "next/image";
import type { Dictionary } from "@/lib/i18n";
import { cvs, navSections, sectionIds } from "@/lib/site";
import photo from "../../public/photo.jpg";
import { pillClass } from "./Section";

export function Hero({ dict }: { dict: Dictionary }) {
  const { hero, nav, a11y } = dict;
  const summary = navSections.map((key) => ({ id: sectionIds[key], label: nav[key] }));

  return (
    <div className="pt-10 md:pt-14">
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="inline-block rounded-full bg-yellow px-4 py-1.5 text-sm font-bold text-on-accent">
            {hero.eyebrow}
          </p>
          <h1 className="mt-10 font-serif leading-[0.9] font-normal text-ink md:mt-24">
            <span className="block text-[clamp(56px,10vw,128px)]">{hero.firstName}</span>{" "}
            <span className="mark mt-1 inline-block rounded-[14px] px-[0.12em] pt-[0.08em] pb-[0.12em] text-[clamp(52px,9.4vw,128px)] italic">
              {hero.lastName}
            </span>
          </h1>
        </div>
        <div className="relative aspect-[3/4] w-60 shrink-0 overflow-hidden rounded-[999px_999px_28px_28px] bg-coral">
          <Image
            src={photo}
            alt={hero.photoAlt}
            fill
            priority
            sizes="240px"
            placeholder="blur"
            className="object-cover object-[46%_50%]"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-8 border-t border-ink pt-8 md:flex-row md:items-center md:justify-between">
        <p className="max-w-[660px] font-serif text-[clamp(26px,3vw,34px)] leading-[1.2] text-ink">
          {hero.tagline}
        </p>
        <div className="flex flex-col items-start gap-3 sm:flex-row md:shrink-0">
          <a href={`#${sectionIds.contact}`} className={pillClass("solid")}>
            {hero.ctaContact}
          </a>
          <a href={`#${sectionIds.journey}`} className={pillClass("outline")}>
            {hero.ctaJourney}
          </a>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
        <h2 className="text-[13px] font-bold tracking-[0.08em] text-muted uppercase">{hero.cvTitle}</h2>
        <ul className="flex flex-wrap gap-3">
          {cvs.map((cv) => (
            <li key={cv.key}>
              <a
                href={cv.href}
                hrefLang={cv.hrefLang}
                type="application/pdf"
                target="_blank"
                rel="noopener"
                className={`gap-2 ${pillClass("outline", "sm")}`}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                  <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                  <path d="M12 18v-6" />
                  <path d="m9 15 3 3 3-3" />
                </svg>
                {hero.cvs[cv.key]}
                <span className="sr-only"> ({hero.cvFormat})</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <nav aria-label={a11y.summary} className="mt-8 border-t border-rule pt-6">
        <ol className="grid gap-2 md:grid-cols-4">
          {summary.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="group inline-flex min-h-11 items-baseline gap-3 text-[15px] font-bold text-ink"
              >
                <span className="font-serif text-2xl font-normal text-accent italic">
                  {String(i + 1).padStart(2, "0")}
                </span>{" "}
                <span className="group-hover:text-accent">{item.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
