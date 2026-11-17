import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { getDictionary, hasLocale, locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";
import "../globals.css";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

// Applies the theme before first paint: the visitor's saved choice, otherwise the system theme.
const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark"||(t!=="light"&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.dataset.theme="dark"}catch(e){}`;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = getDictionary(lang);
  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: { fr: "/fr", en: "/en", "x-default": "/fr" },
    },
    openGraph: {
      type: "website",
      url: `/${lang}`,
      title: meta.title,
      description: meta.description,
      locale: meta.ogLocale,
      siteName: "Yoan Poux--Bories",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${instrumentSerif.variable} ${jakarta.variable}`}
      // Lets Next.js turn off smooth scrolling during route changes (keeps it for anchors).
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
        {/* The script is served by Vercel only: skip it elsewhere (CI, local) to avoid a 404. */}
        {process.env.VERCEL ? <Analytics /> : null}
      </body>
    </html>
  );
}
