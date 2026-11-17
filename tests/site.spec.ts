import { expect, test, type Page } from "@playwright/test";

const anchors = ["ce-que-je-fais", "parcours", "freelance", "competences", "soft-skills", "contact", "autres-activites"];

// Fails the test on any uncaught error or console error.
function trackErrors(page: Page) {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => {
    if (m.type() === "error") errors.push(m.text());
  });
  return errors;
}

for (const lang of ["fr", "en"] as const) {
  test.describe(`home page (${lang})`, () => {
    test("renders every section without errors or horizontal scroll", async ({ page }) => {
      const errors = trackErrors(page);
      await page.goto(`/${lang}`);
      await expect(page.locator("html")).toHaveAttribute("lang", lang);
      await expect(page.locator("h1")).toContainText("Poux--Bories");
      for (const id of anchors) await expect(page.locator(`[id="${id}"]`)).toHaveCount(1);
      await expect(page.locator('main nav ol a')).toHaveCount(5);
      expect(await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth)).toBe(false);
      expect(errors).toEqual([]);
    });

    test("experience sheet opens and closes back", async ({ page }) => {
      await page.goto(`/${lang}`);
      const button = page.locator("#parcours-gembaware button[aria-haspopup=dialog]").first();
      await button.click();
      const dialog = page.locator("dialog[open]");
      await expect(dialog).toBeVisible();
      await expect(dialog.locator("h3")).toContainText("Gembaware");
      await page.keyboard.press("Escape");
      await expect(page.locator("dialog[open]")).toHaveCount(0);
      await expect(button).toBeFocused();
    });

    test("CV opens in a dialog with a download link", async ({ page }) => {
      await page.goto(`/${lang}`);
      await page.locator("main button[aria-haspopup=dialog]").first().click();
      const dialog = page.locator("dialog[open]");
      await expect(dialog.locator("object")).toHaveAttribute("data", "/cv/CV_Yoan_Pouxbories_FR.pdf");
      await expect(dialog.locator("a[download]").first()).toHaveAttribute("href", "/cv/CV_Yoan_Pouxbories_FR.pdf");
      const pdf = await page.request.get("/cv/CV_Yoan_Pouxbories_UK.pdf");
      expect(pdf.headers()["content-type"]).toBe("application/pdf");
    });

    test("legal pages render and keep the page when switching language", async ({ page }) => {
      await page.goto(`/${lang}`);
      await page.locator("footer a").first().click();
      await expect(page).toHaveURL(new RegExp(`/${lang}/mentions-legales$`));
      await expect(page.locator("main article")).toContainText("108 414 285 00024");
      const other = lang === "fr" ? "en" : "fr";
      await expect(page.locator(`a[hreflang="${other}"]`)).toHaveAttribute("href", `/${other}/mentions-legales`);
      await page.goto(`/${lang}/confidentialite`);
      await expect(page.locator("main article h2")).toHaveCount(7);
    });
  });
}

test("theme toggle switches and remembers the theme", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "light" });
  await page.goto("/fr");
  const html = page.locator("html");
  await expect(html).not.toHaveAttribute("data-theme", "dark");
  await page.locator("button[aria-pressed]").click();
  await expect(html).toHaveAttribute("data-theme", "dark");
  await page.reload();
  await expect(html).toHaveAttribute("data-theme", "dark");
});

test("follows the system theme by default", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/fr");
  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
});

test("language switch goes to the other locale and remembers it", async ({ page, context }) => {
  await page.goto("/fr");
  await page.locator('a[hreflang="en"]').click();
  await expect(page).toHaveURL(/\/en$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  expect((await context.cookies()).find((c) => c.name === "lang")?.value).toBe("en");
});

test("root redirects to French by default", async ({ request }) => {
  const res = await request.get("/", { maxRedirects: 0 });
  expect(res.status()).toBe(307);
  expect(res.headers().location).toMatch(/\/fr$/);
});

test("SEO files and link preview images are served", async ({ request, page }) => {
  expect((await request.get("/sitemap.xml")).ok()).toBe(true);
  expect((await request.get("/robots.txt")).ok()).toBe(true);
  for (const lang of ["fr", "en"]) {
    await page.goto(`/${lang}`);
    const og = await page.locator('meta[property="og:image"]').getAttribute("content");
    const image = await request.get(new URL(og!).pathname + new URL(og!).search);
    expect(image.headers()["content-type"]).toBe("image/png");
  }
});

test("contact API rejects invalid input and silently drops bots", async ({ request }) => {
  const invalid = await request.post("/api/contact", {
    data: { name: "", email: "nope", message: "", startedAt: Date.now() - 10_000 },
  });
  expect(invalid.status()).toBe(400);
  // Honeypot filled: answered as a success without sending anything.
  const bot = await request.post("/api/contact", {
    data: { name: "Bot", email: "bot@example.com", message: "spam", company: "x", startedAt: Date.now() - 10_000 },
  });
  expect(bot.status()).toBe(200);
});
