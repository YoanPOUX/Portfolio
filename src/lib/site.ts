// Public contact details. Phone number and postal address are never displayed.
export const contact = {
  email: "ypbsolutions31@gmail.com",
};

// Legal identity, required by French law (LCEN) on the legal notice page only.
// Address and phone appear nowhere else on the site (Yoan's decision, 17/11/2026).
export const publisher = {
  name: "Yoan Poux--Bories",
  siret: "108 414 285 00024",
  address: "Bâtiment 3, appartement 302, 2 rue Georges Vallerey, 31320 Castanet-Tolosan, France",
  phone: "+33 6 70 78 41 98",
  email: contact.email,
  host: "Vercel Inc.",
  hostAddress: "440 N Barranca Ave #4133, Covina, CA 91723, USA",
  hostUrl: "https://vercel.com",
};

// Paths of the legal pages, under /fr or /en.
export const legalPaths = { legal: "mentions-legales", privacy: "confidentialite" } as const;

// Downloadable CVs (public/cv). Phone number redacted from the PDFs before publishing.
export const cvs = [
  { key: "fr", href: "/cv/CV_Yoan_Pouxbories_FR.pdf", hrefLang: "fr" },
  { key: "uk", href: "/cv/CV_Yoan_Pouxbories_UK.pdf", hrefLang: "en-GB" },
] as const;

// Social profiles shown in the Contact section, displayed by their handle.
export const socials = [
  { network: "linkedin", url: "https://www.linkedin.com/in/yoan-poux-bories/", handle: "yoan-poux-bories" },
  { network: "github", url: "https://github.com/YoanPOUX", handle: "YoanPOUX" },
  { network: "instagram", url: "https://instagram.com/yoyo_poux", handle: "yoyo_poux" },
] as const;

// Absolute site URL, used for metadata, Open Graph and the sitemap.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

// Section anchors, shared by the navigation, the summary and the sections.
export const sectionIds = {
  whatIDo: "ce-que-je-fais",
  journey: "parcours",
  freelance: "freelance",
  skills: "competences",
  softSkills: "soft-skills",
  contact: "contact",
  // Former "Autres activités" anchor, kept on the setter block so old links still land.
  setting: "autres-activites",
} as const;

// Order of the numbered sections, shared by the navigation and the hero summary.
export const navSections = ["journey", "freelance", "skills", "softSkills", "contact"] as const;

// Anchor of an experience card in "Parcours & projets", e.g. #parcours-gembaware.
export const experienceAnchor = (id: string) => `${sectionIds.journey}-${id}`;
