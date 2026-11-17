import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cacheLife } from "next/cache";
import { ImageResponse } from "next/og";
import { defaultLocale, getDictionary, hasLocale, locales } from "@/lib/i18n";
import { siteUrl } from "@/lib/site";

// Link preview (LinkedIn, WhatsApp…), one per language, generated at build time.
// Colours are the light theme tokens of globals.css; satori cannot read CSS variables.
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Yoan Poux--Bories";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

const font = async (file: string) => {
  const data = await readFile(join(process.cwd(), "assets/og-fonts", file));
  return data.buffer.slice(data.byteOffset, data.byteOffset + data.byteLength) as ArrayBuffer;
};

// Cached so the file reads don't make the image dynamic: it is prerendered at build.
async function loadAssets() {
  "use cache";
  cacheLife("max");
  const [serif, serifItalic, sans, sansBold, photo] = await Promise.all([
    font("instrument-serif-latin-400-normal.woff"),
    font("instrument-serif-latin-400-italic.woff"),
    font("plus-jakarta-sans-latin-500-normal.woff"),
    font("plus-jakarta-sans-latin-700-normal.woff"),
    readFile(join(process.cwd(), "public/photo.jpg")),
  ]);
  return { serif, serifItalic, sans, sansBold, photoSrc: `data:image/jpeg;base64,${photo.toString("base64")}` };
}

export default async function OpenGraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const { og, hero } = getDictionary(hasLocale(lang) ? lang : defaultLocale);
  const { serif, serifItalic, sans, sansBold, photoSrc } = await loadAssets();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "64px 80px",
          background: "#FBF9FF",
          color: "#1A1033",
          fontFamily: "Jakarta",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 700 }}>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              background: "#FFD23F",
              borderRadius: 999,
              padding: "8px 22px",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            {hero.eyebrow}
          </div>
          <div style={{ display: "flex", marginTop: 36, fontFamily: "Serif", fontSize: 112, lineHeight: 1 }}>
            {hero.firstName}
          </div>
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              marginTop: 8,
              padding: "4px 18px 10px",
              background: "#FFD23F",
              borderRadius: 16,
              fontFamily: "Serif",
              fontStyle: "italic",
              fontSize: 112,
              lineHeight: 1,
            }}
          >
            {hero.lastName}
          </div>
          <div style={{ display: "flex", marginTop: 36, fontSize: 28, lineHeight: 1.35, color: "#4F4670" }}>
            {og.tagline}
          </div>
          <div style={{ display: "flex", marginTop: 28, fontSize: 24, fontWeight: 700, color: "#5B3DF5" }}>
            {new URL(siteUrl).host}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: 330,
            height: 440,
            overflow: "hidden",
            borderRadius: "999px 999px 28px 28px",
            background: "#FF7A66",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- satori renders plain <img> only */}
          <img src={photoSrc} alt="" width={660} height={440} style={{ objectFit: "cover", marginLeft: -150 }} />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Serif", data: serif, style: "normal", weight: 400 },
        { name: "Serif", data: serifItalic, style: "italic", weight: 400 },
        { name: "Jakarta", data: sans, style: "normal", weight: 500 },
        { name: "Jakarta", data: sansBold, style: "normal", weight: 700 },
      ],
    },
  );
}
