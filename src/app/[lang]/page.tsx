import { notFound } from "next/navigation";
import { Contact } from "@/components/Contact";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Freelance, Journey, OtherWork, Skills, WhatIDo } from "@/components/Sections";
import { getDictionary, hasLocale } from "@/lib/i18n";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <a
        href="#contenu"
        className="sr-only rounded-full bg-btn px-5 py-3 font-bold text-on-violet focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
      >
        {dict.a11y.skipToContent}
      </a>
      <div className="mx-auto max-w-[1176px] px-5 md:px-4">
        <Header dict={dict} lang={lang} />
        <main id="contenu">
          <Hero dict={dict} />
          <WhatIDo dict={dict} />
          <Freelance dict={dict} />
          <Journey dict={dict} />
          <Skills dict={dict} />
          <OtherWork dict={dict} />
          <Contact dict={dict} />
        </main>
      </div>
      <footer className="mt-24 border-t border-rule">
        <div className="mx-auto flex max-w-[1176px] flex-col gap-2 px-5 py-8 text-sm text-muted md:flex-row md:justify-between md:px-4">
          <p>{dict.footer.copyright}</p>
          <p>{dict.footer.colophon}</p>
        </div>
      </footer>
    </>
  );
}
