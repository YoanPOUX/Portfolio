import type { MetadataRoute } from "next";
import { legalPaths, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Home page, then the legal pages, each in French and English.
  return ["", `/${legalPaths.legal}`, `/${legalPaths.privacy}`].flatMap((path) => {
    const languages = { fr: `${siteUrl}/fr${path}`, en: `${siteUrl}/en${path}` };
    return [
      { url: languages.fr, alternates: { languages } },
      { url: languages.en, alternates: { languages } },
    ];
  });
}
