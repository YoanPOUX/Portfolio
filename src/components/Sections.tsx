import type { Dictionary } from "@/lib/i18n";
import { sectionIds } from "@/lib/site";
import { Kicker, pillClass, Section } from "./Section";

const cardTones = ["bg-yellow", "bg-mint", "bg-coral"];

export function WhatIDo({ dict }: { dict: Dictionary }) {
  return (
    <Section id={sectionIds.whatIDo} number="01" label={dict.sections.whatIDo}>
      <ul className="grid gap-5 lg:grid-cols-3">
        {dict.whatIDo.cards.map((card, i) => (
          <li
            key={card.href}
            className={`flex flex-col rounded-[28px] p-7 text-on-accent ${cardTones[i]}`}
          >
            <h3 className="font-serif text-[32px] leading-[1.1] font-normal">
              {card.title} <em>{card.titleEm}</em>
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed">{card.text}</p>
            <a
              href={card.href}
              className="mt-auto pt-8 text-[15px] font-bold underline underline-offset-4 hover:decoration-2"
            >
              {card.link} <span aria-hidden="true">→</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

function TitleWithMark({ title, mark }: { title: string; mark: string }) {
  return (
    <h3 className="font-serif text-[clamp(40px,5vw,56px)] leading-[1.1] font-normal text-ink">
      {title} <span className="mark italic">{mark}</span>
    </h3>
  );
}

export function Freelance({ dict }: { dict: Dictionary }) {
  const f = dict.freelance;
  return (
    <Section id={sectionIds.freelance} number="02" label={dict.sections.freelance}>
      <TitleWithMark title={f.title} mark={f.titleMark} />
      <p className="mt-4 max-w-[600px] text-lg leading-relaxed text-muted">{f.intro}</p>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <div className="rounded-[28px] bg-inset p-7">
          <Kicker>{f.servicesLabel}</Kicker>
          <ul className="mt-4 flex flex-wrap gap-2">
            {f.services.map((service) => (
              <li
                key={service}
                className="rounded-full bg-violet px-3.5 py-1.5 text-[15px] font-medium text-on-violet"
              >
                {service}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Kicker>{f.clientsLabel}</Kicker>
          </div>
          <ul className="mt-4 flex flex-wrap gap-2">
            {f.clients.map((client) => (
              <li
                key={client}
                className="rounded-full bg-card px-3.5 py-1.5 text-[15px] font-medium text-ink"
              >
                {client}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[28px] bg-inset p-7">
          <Kicker>{f.methodLabel}</Kicker>
          <ol className="mt-2">
            {f.method.map((step, i) => (
              <li
                key={step}
                className="flex gap-4 border-b border-rule py-3.5 leading-relaxed text-ink last:border-b-0"
              >
                <span aria-hidden="true" className="font-serif text-2xl leading-none text-accent italic">
                  {i + 1}
                </span>{" "}
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <a href={`#${sectionIds.contact}`} className={`mt-8 ${pillClass("solid")}`}>
        {f.cta}
      </a>
    </Section>
  );
}

const tagTones = ["bg-coral", "bg-yellow"];

type Entry = {
  label: string;
  title: string;
  text?: string;
  items?: string[];
  stepsIntro?: string;
  steps?: string[];
  highlight?: string;
  tech?: string;
};

function MissionCard({ entry }: { entry: Entry }) {
  return (
    <article className="rounded-[24px] border border-rule bg-card p-7">
      <Kicker>{entry.label}</Kicker>
      <h4 className="mt-2 text-lg font-bold text-ink">{entry.title}</h4>
      {entry.text && <p className="mt-3 leading-relaxed text-muted">{entry.text}</p>}
      {entry.items && (
        <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-muted marker:text-ink">
          {entry.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {entry.steps && (
        <>
          <p className="mt-5 leading-relaxed text-muted">{entry.stepsIntro}</p>
          <ol className="mt-2 list-decimal space-y-1.5 pl-5 leading-relaxed text-muted marker:font-bold marker:text-accent">
            {entry.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </>
      )}
      {entry.highlight && <p className="mt-4 font-bold text-ink">{entry.highlight}</p>}
      {entry.tech && <p className="mt-4 text-sm font-bold text-ink">{entry.tech}</p>}
    </article>
  );
}

export function Journey({ dict }: { dict: Dictionary }) {
  return (
    <Section id={sectionIds.journey} number="03" label={dict.sections.journey}>
      <div className="space-y-14">
        {dict.journey.schools.map((school, i) => (
          <div key={school.tag} className={i > 0 ? "border-t border-rule pt-14" : undefined}>
            <p
              className={`inline-block rounded-full px-3.5 py-1 text-sm font-bold text-on-accent ${tagTones[i % tagTones.length]}`}
            >
              {school.tag}
            </p>
            <h3 className="mt-3 font-serif text-[clamp(36px,4vw,48px)] leading-[1.1] font-normal text-ink">
              {school.title} <em>{school.titleEm}</em>
            </h3>
            <div className="mt-6 space-y-4">
              {school.entries.map((entry) => (
                <MissionCard key={entry.title} entry={entry} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

const pillTones: Record<string, string> = {
  violet: "bg-violet text-on-violet",
  yellow: "bg-yellow text-on-accent",
  mint: "bg-mint text-on-accent",
  coral: "bg-coral text-on-accent",
  neutral: "bg-inset text-ink",
};

export function Skills({ dict }: { dict: Dictionary }) {
  return (
    <Section id={sectionIds.skills} number="04" label={dict.sections.skills}>
      <dl>
        {dict.skills.groups.map((group) => (
          <div
            key={group.name}
            className="grid gap-3 border-b border-rule py-5 first:pt-0 last:border-b-0 sm:grid-cols-[200px_1fr]"
          >
            <dt className="pt-1 text-lg font-bold text-ink">{group.name}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={`rounded-full px-3.5 py-1.5 text-[15px] font-medium ${pillTones[group.tone]}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function OtherWork({ dict }: { dict: Dictionary }) {
  const o = dict.other;
  return (
    <Section id={sectionIds.other} number="05" label={dict.sections.other}>
      <div className="rounded-[28px] border border-rule bg-card p-7 md:p-10">
        <h3 className="font-serif text-[clamp(36px,4vw,48px)] leading-[1.1] font-normal text-ink">
          {o.title} <em>{o.titleEm}</em>
        </h3>
        <p className="mt-4 max-w-[560px] text-lg leading-relaxed text-muted">{o.intro}</p>
        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div>
            <Kicker>{o.offerLabel}</Kicker>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 leading-relaxed text-muted marker:text-ink">
              {o.offer.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <Kicker>{o.clientsLabel}</Kicker>
            <p className="mt-3 leading-relaxed text-muted">{o.clients}</p>
          </div>
        </div>
        <a href={`#${sectionIds.contact}`} className={`mt-8 ${pillClass("outline")}`}>
          {o.cta}
        </a>
      </div>
    </Section>
  );
}
