import { readFileSync } from "node:fs";
import { expect, test } from "@playwright/test";
import en from "../src/messages/en.json";
import fr from "../src/messages/fr.json";

// Content rules from CLAUDE.md, checked on the translation files (no browser needed).

// Every text path ("journey.experiences[0].role"…) of a dictionary.
function paths(value: unknown, prefix = ""): string[] {
  if (Array.isArray(value)) return value.flatMap((v, i) => paths(v, `${prefix}[${i}]`));
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([k, v]) => paths(v, prefix ? `${prefix}.${k}` : k));
  }
  return [prefix];
}

test("French and English translations have exactly the same keys", () => {
  expect(paths(en).sort()).toEqual(paths(fr).sort());
});

test("no excluded project or client name in the site texts", () => {
  const text = JSON.stringify([fr, en]);
  for (const banned of [/valab/i, /empreinte/i, /decoupenum/i, /technisph/i, /batinea/i, /\bCNM\b/, /immobili/i, /real estate/i, /gestion de tâches/i, /task management/i]) {
    expect(text, `found ${banned}`).not.toMatch(banned);
  }
});

test("the phone number lives only in the legal identity", () => {
  const phone = /(\+33\s?|0)6[\s.]?70[\s.]?78[\s.]?41[\s.]?98/;
  expect(JSON.stringify([fr, en])).not.toMatch(phone);
  for (const file of ["src/components/Contact.tsx", "src/components/Hero.tsx", "src/components/SiteFooter.tsx"]) {
    expect(readFileSync(file, "utf8"), file).not.toMatch(phone);
  }
});

test("Imagin'Expo is never described as an integrator", () => {
  const text = JSON.stringify([fr, en]);
  expect(text).not.toMatch(/intégrateur chez Imagin'Expo/i);
  expect(text).not.toMatch(/chef de projet intégrateur/i);
});
