import { notFound } from "next/navigation";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { PageShell } from "@/components/PageShell";
import { Freelance, Journey, Skills, SoftSkills, WhatIDo } from "@/components/Sections";
import { getDictionary, hasLocale } from "@/lib/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <PageShell dict={dict} lang={lang}>
      <Hero dict={dict} />
      <WhatIDo dict={dict} />
      <Journey dict={dict} />
      <Freelance dict={dict} />
      <Skills dict={dict} />
      <SoftSkills dict={dict} />
      <Contact dict={dict} lang={lang} />
    </PageShell>
  );
}
