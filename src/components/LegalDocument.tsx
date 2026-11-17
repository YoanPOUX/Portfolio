import { Fragment } from "react";
import { publisher } from "@/lib/site";

type DocSection = { title: string; text?: string; items?: string[] };

// Replaces {name}, {siret}… with the publisher's details from site.ts.
function fill(text: string) {
  return text.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in publisher ? publisher[key as keyof typeof publisher] : match,
  );
}

const LINK = /(https?:\/\/[^\s,]+?(?=[.,]?(?:\s|$))|[\w.+-]+@[\w-]+\.[\w.-]+\w)/g;

// Turns URLs and email addresses into links.
function Linkified({ text }: { text: string }) {
  return (
    <>
      {fill(text)
        .split(LINK)
        .map((part, i) => {
          if (i % 2 === 0) return <Fragment key={i}>{part}</Fragment>;
          const href = part.includes("@") ? `mailto:${part}` : part;
          return (
            <a key={i} href={href} className="break-all text-accent underline underline-offset-4 hover:text-accent-hover">
              {part.replace(/^https?:\/\//, "")}
            </a>
          );
        })}
    </>
  );
}

export function LegalDocument({
  title,
  titleMark,
  updated,
  sections,
}: {
  title: string;
  titleMark: string;
  updated: string;
  sections: DocSection[];
}) {
  return (
    <article className="max-w-[760px] pt-12 md:pt-16">
      <h1 className="font-serif text-[clamp(44px,6vw,72px)] leading-[1.05] font-normal text-ink">
        {title} <span data-reveal className="mark italic">{titleMark}</span>
      </h1>
      <p className="mt-4 text-sm text-muted">{updated}</p>
      <div className="mt-10 space-y-8">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-[13px] font-bold tracking-[0.08em] text-accent uppercase">{section.title}</h2>
            {section.items && (
              <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-ink marker:text-muted">
                {section.items.map((item) => (
                  <li key={item}>
                    <Linkified text={item} />
                  </li>
                ))}
              </ul>
            )}
            {section.text && (
              <p className="mt-3 leading-relaxed text-ink">
                <Linkified text={section.text} />
              </p>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
