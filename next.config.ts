import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  // Files read by the link preview image, in case it is regenerated at runtime.
  outputFileTracingIncludes: {
    "/**/opengraph-image*": ["./assets/og-fonts/**", "./public/photo.jpg"],
  },
  turbopack: {
    // Pin the root: a stray lockfile in a parent folder would otherwise be picked up.
    root: import.meta.dirname,
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
