// Public contact details. Phone number and postal address are never displayed.
export const contact = {
  email: "ypbsolutions31@gmail.com",
  linkedin: "https://www.linkedin.com/in/yoan-poux-bories/",
  github: "https://github.com/YoanPOUX",
};

// Absolute site URL, used for metadata, Open Graph and the sitemap.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

// Section anchors, shared by the navigation, the summary and the sections.
export const sectionIds = {
  whatIDo: "ce-que-je-fais",
  freelance: "freelance",
  journey: "parcours",
  skills: "competences",
  other: "autres-activites",
  contact: "contact",
} as const;
