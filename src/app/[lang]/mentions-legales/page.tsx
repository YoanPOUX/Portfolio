import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalDocument } from "@/components/LegalDocument";
import { PageShell } from "@/components/PageShell";
import { getDictionary, hasLocale } from "@/lib/i18n";
import { legalPaths } from "@/lib/site";

export async function generateMetadata({ params }: PageProps<"/[lang]/mentions-legales">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return {
    title: getDictionary(lang).legal.metaTitle,
    alternates: {
      canonical: `/${lang}/${legalPaths.legal}`,
      languages: { fr: `/fr/${legalPaths.legal}`, en: `/en/${legalPaths.legal}` },
    },
  };
}

export default async function LegalNotice({ params }: PageProps<"/[lang]/mentions-legales">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <PageShell dict={dict} lang={lang} path={`/${legalPaths.legal}`}>
      <LegalDocument {...dict.legal} />
    </PageShell>
  );
}
