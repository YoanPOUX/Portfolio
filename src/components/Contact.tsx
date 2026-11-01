import type { Dictionary } from "@/lib/i18n";
import { contact, sectionIds } from "@/lib/site";
import { ContactForm } from "./ContactForm";
import { Section } from "./Section";

const linkClass =
  "mt-1 inline-block text-lg font-bold break-all text-accent underline underline-offset-4 hover:text-accent-hover";

export function Contact({ dict }: { dict: Dictionary }) {
  const c = dict.contact;
  return (
    <Section id={sectionIds.contact} number="06" label={dict.sections.contact}>
      <h3 className="font-serif text-[clamp(40px,5vw,56px)] leading-[1.1] font-normal text-ink">
        {c.title} <span className="mark italic">{c.titleMark}</span>
      </h3>
      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <div>
          <p className="max-w-[400px] text-lg leading-relaxed text-muted">{c.intro}</p>
          <dl className="mt-8 space-y-6">
            <div>
              <dt className="text-sm font-bold text-muted">{c.emailLabel}</dt>
              <dd>
                <a href={`mailto:${contact.email}`} className={linkClass}>{contact.email}</a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-bold text-muted">{c.linkedinLabel}</dt>
              <dd>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  linkedin.com/in/yoan-poux-bories
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-sm font-bold text-muted">{c.githubLabel}</dt>
              <dd>
                <a href={contact.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  github.com/YoanPOUX
                </a>
              </dd>
            </div>
          </dl>
        </div>
        <ContactForm t={c.form} />
      </div>
    </Section>
  );
}
