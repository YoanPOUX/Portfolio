import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalDocument } from "@/components/LegalDocument";
import { PageShell } from "@/components/PageShell";
import { getDictionary, hasLocale } from "@/lib/i18n";
import { legalPaths } from "@/lib/site";

export async function generateMetadata({ params }: PageProps<"/[lang]/confidentialite">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return {
    title: getDictionary(lang).privacy.metaTitle,
    alternates: {
      canonical: `/${lang}/${legalPaths.privacy}`,
      languages: { fr: `/fr/${legalPaths.privacy}`, en: `/en/${legalPaths.privacy}` },
    },
  };
}

export default async function PrivacyPolicy({ params }: PageProps<"/[lang]/confidentialite">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <PageShell dict={dict} lang={lang} path={`/${legalPaths.privacy}`}>
      <LegalDocument {...dict.privacy} />
    </PageShell>
  );
}
