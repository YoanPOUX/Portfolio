// Public contact details. Phone number and postal address are never displayed.
export const contact = {
  email: "ypbsolutions31@gmail.com",
};

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
