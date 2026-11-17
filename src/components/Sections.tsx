import type { Dictionary } from "@/lib/i18n";
import { sectionIds } from "@/lib/site";
import { DetailDialog } from "./DetailDialog";
import { Kicker, pillClass, Section } from "./Section";

type DetailSection = { title: string; text?: string; items?: string[] };

const cardTones = ["bg-coral", "bg-yellow", "bg-mint"];

// Intro block under the hero: not a numbered section, not in the navigation.
export function WhatIDo({ dict }: { dict: Dictionary }) {
  const w = dict.whatIDo;
  return (
    <section id={sectionIds.whatIDo} aria-labelledby={`${sectionIds.whatIDo}-title`} className="mt-20 md:mt-24">
      <h2
        id={`${sectionIds.whatIDo}-title`}
        className="font-serif text-[clamp(36px,4vw,48px)] leading-[1.1] font-normal text-ink"
      >
        {w.title} <em>{w.titleEm}</em>
      </h2>
      <ul className="mt-6 grid gap-5 lg:grid-cols-3">
        {w.cards.map((card, i) => (
          <li key={card.href} className={`flex flex-col rounded-[28px] p-7 text-on-accent ${cardTones[i]}`}>
            <h3 className="font-serif text-[32px] leading-[1.1] font-normal">
              {card.title} <em>{card.titleEm}</em>
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed">{card.text}</p>
            {card.items.length > 0 && (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-[15px] leading-relaxed">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
            <div className="mt-auto pt-7">
              <a
                href={card.href}
                className="inline-flex h-11 items-center gap-2 rounded-full bg-on-accent px-5 text-[15px] font-bold text-on-violet transition-opacity hover:opacity-85"
              >
                {card.link} <span aria-hidden="true">→</span>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Badges({ items, label }: { items: string[]; label: string }) {
  return (
    <ul aria-label={label} className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item} className="rounded-full bg-inset px-3 py-1 text-[13px] font-semibold text-ink">
          {item}
        </li>
      ))}
    </ul>
  );
}

function DetailBody({ sections }: { sections: DetailSection[] }) {
  return (
    <div className="space-y-6">
      {sections.map((section) => (
        <div key={section.title}>
          <h4 className="text-[13px] font-bold tracking-[0.08em] text-accent uppercase">{section.title}</h4>
          {section.text && <p className="mt-2 leading-relaxed text-muted">{section.text}</p>}
          {section.items && (
            <ul className="mt-2 list-disc space-y-1.5 pl-5 leading-relaxed text-muted marker:text-ink">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

type Journey = Dictionary["journey"];
type Experience = Journey["experiences"][number];
type Project = Extract<Experience, { projects: unknown }>["projects"][number];

function ExperienceCard({ exp, dict }: { exp: Experience; dict: Dictionary }) {
  return (
    <article className="flex flex-col gap-3 rounded-[24px] border border-rule bg-card p-6 md:p-7">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <h3 className="text-[22px] font-bold text-ink">{exp.org}</h3>
        <p className="rounded-full bg-inset px-3 py-1 text-sm font-bold text-accent">{exp.period}</p>
      </div>
      <div>
        <Kicker>{exp.status}</Kicker>
        <p className="mt-1 text-lg font-semibold text-ink">{exp.role}</p>
        <p className="text-sm text-muted">{exp.school}</p>
      </div>
      <p className="max-w-[720px] leading-relaxed text-muted">{exp.summary}</p>
      <Badges items={exp.tech} label={dict.a11y.technologies} />
      <div className="mt-2">
        <DetailDialog
          buttonLabel={dict.journey.experienceButton}
          closeLabel={dict.a11y.close}
          title={`${exp.role} · ${exp.org}`}
          subtitle={`${exp.period} · ${exp.status}`}
        >
          <DetailBody sections={exp.detail} />
        </DetailDialog>
      </div>
    </article>
  );
}

function ProjectCard({
  project,
  dict,
  label,
}: {
  project: { name: string; summary: string; tech: string[]; detail: DetailSection[]; client?: string; featured?: boolean };
  dict: Dictionary;
  label?: string;
}) {
  const featured = project.featured;
  return (
    <article
      className={`flex flex-col gap-3 rounded-[24px] bg-card p-6 ${featured ? "border-2 border-accent md:p-7" : "border border-rule"}`}
    >
      {featured && (
        <p className="self-start rounded-full bg-yellow px-3 py-1 text-[13px] font-bold text-on-accent">
          {dict.journey.featured}
        </p>
      )}
      {project.client && <p className="text-sm font-semibold text-muted">{project.client}</p>}
      <h4 className={`font-bold text-ink ${featured ? "font-serif text-[clamp(28px,3vw,34px)] leading-[1.1] font-normal" : "text-lg"}`}>
        {project.name}
      </h4>
      <p className={`leading-relaxed text-muted ${featured ? "max-w-[680px]" : "text-[15px]"}`}>{project.summary}</p>
      <Badges items={project.tech} label={dict.a11y.technologies} />
      <div className="mt-auto pt-2">
        <DetailDialog
          buttonLabel={dict.journey.projectButton}
          closeLabel={dict.a11y.close}
          title={project.name}
          subtitle={label ?? project.client}
        >
          <DetailBody sections={project.detail} />
        </DetailDialog>
      </div>
    </article>
  );
}

function GembawareProjects({ projects, dict }: { projects: Project[]; dict: Dictionary }) {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  return (
    <div className="mt-4 rounded-[28px] bg-inset p-4 md:p-6">
      <h4 className="px-2 pb-4 text-[13px] font-bold tracking-[0.08em] text-accent uppercase md:px-1">
        {dict.journey.projectsTitle}
      </h4>
      <div className="space-y-4">
        {featured.map((p) => (
          <ProjectCard key={p.id} project={p} dict={dict} label={`Gembaware · ${p.client}`} />
        ))}
        <div className="grid gap-4 lg:grid-cols-3">
          {others.map((p) => (
            <ProjectCard key={p.id} project={p} dict={dict} label={`Gembaware · ${p.client}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Journey({ dict }: { dict: Dictionary }) {
  const j = dict.journey;
  return (
    <Section id={sectionIds.journey} number="01" label={dict.sections.journey}>
      <p className="max-w-[600px] text-lg leading-relaxed text-muted">{j.intro}</p>

      <ol className="mt-8 space-y-8 border-l-2 border-rule pl-5 md:pl-8">
        {j.experiences.map((exp) => (
          <li key={exp.id} className="relative">
            <span
              aria-hidden="true"
              className="absolute top-8 -left-[29px] size-4 rounded-full bg-accent ring-4 ring-bg md:-left-[41px]"
            />
            <ExperienceCard exp={exp} dict={dict} />
            {"projects" in exp && exp.projects && <GembawareProjects projects={exp.projects} dict={dict} />}
          </li>
        ))}
      </ol>

      <div className="mt-14 border-t border-rule pt-10">
        <p className="inline-block rounded-full bg-yellow px-3.5 py-1 text-sm font-bold text-on-accent">
          {j.academic.period}
        </p>
        <h3 className="mt-3 font-serif text-[clamp(32px,4vw,44px)] leading-[1.1] font-normal text-ink">
          {j.academic.title}
        </h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {j.academic.projects.map((p) => (
            <ProjectCard key={p.id} project={p} dict={dict} label={j.academic.title} />
          ))}
        </div>
      </div>
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

const blockClass = "flex flex-col rounded-[28px] bg-inset p-7 md:p-8";
const blockTitleClass = "font-serif text-[clamp(30px,3.4vw,38px)] leading-[1.1] font-normal text-ink";

export function Freelance({ dict }: { dict: Dictionary }) {
  const { dev, setting } = dict.freelance;
  return (
    <Section id={sectionIds.freelance} number="02" label={dict.sections.freelance}>
      <TitleWithMark title={dict.freelance.title} mark={dict.freelance.titleMark} />

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <div className={blockClass}>
          <h4 className={blockTitleClass}>
            {dev.title} <em>{dev.titleEm}</em>
          </h4>
          <p className="mt-3 leading-relaxed text-muted">{dev.intro}</p>

          <div className="mt-6">
            <Kicker>{dev.servicesLabel}</Kicker>
          </div>
          <ul className="mt-3 flex flex-wrap gap-2">
            {dev.services.map((service) => (
              <li key={service} className="rounded-full bg-violet px-3.5 py-1.5 text-[15px] font-medium text-on-violet">
                {service}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Kicker>{dev.clientsLabel}</Kicker>
          </div>
          <ul className="mt-3 flex flex-wrap gap-2">
            {dev.clients.map((client) => (
              <li key={client} className="rounded-full bg-card px-3.5 py-1.5 text-[15px] font-medium text-ink">
                {client}
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <Kicker>{dev.methodLabel}</Kicker>
          </div>
          <ol className="mt-1">
            {dev.method.map((step, i) => (
              <li key={step} className="flex gap-4 border-b border-rule py-3 leading-relaxed text-ink last:border-b-0">
                <span aria-hidden="true" className="font-serif text-2xl leading-none text-accent italic">
                  {i + 1}
                </span>{" "}
                <span>{step}</span>
              </li>
            ))}
          </ol>

          <a href={`#${sectionIds.contact}`} className={`mt-6 self-start ${pillClass("solid")}`}>
            {dev.cta}
          </a>
        </div>

        <div id={sectionIds.setting} className={blockClass}>
          <h4 className={blockTitleClass}>
            {setting.title} <em>{setting.titleEm}</em>
          </h4>
          <p className="mt-3 leading-relaxed text-muted">{setting.intro}</p>
          <div className="mt-6">
            <Kicker>{setting.itemsLabel}</Kicker>
          </div>
          <ul className="mt-1">
            {setting.items.map((item) => (
              <li key={item} className="border-b border-rule py-3 leading-relaxed text-ink last:border-b-0">
                {item}
              </li>
            ))}
          </ul>
          <a href={`#${sectionIds.contact}`} className={`mt-auto self-start ${pillClass("outline")}`}>
            {setting.cta}
          </a>
        </div>
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
    <Section id={sectionIds.skills} number="03" label={dict.sections.skills}>
      <dl>
        {dict.skills.groups.map((group) => (
          <div
            key={group.name}
            className="grid gap-3 border-b border-rule py-5 first:pt-0 last:border-b-0 sm:grid-cols-[240px_1fr]"
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
