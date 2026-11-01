import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = { fr: `${siteUrl}/fr`, en: `${siteUrl}/en` };
  return [
    { url: `${siteUrl}/fr`, alternates: { languages } },
    { url: `${siteUrl}/en`, alternates: { languages } },
  ];
}
