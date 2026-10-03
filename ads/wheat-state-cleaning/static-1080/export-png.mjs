// Renders each ad HTML to a 1080x1080 PNG in png/. Usage: node export-png.mjs (needs Playwright).
import { chromium } from "playwright";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const dir = path.dirname(fileURLToPath(import.meta.url));
const ads = ["ad1-bathtub-1080", "ad2-toilet-1080"];
const browser = await chromium.launch();
for (const name of ads) {
  const page = await browser.newPage({ viewport: { width: 1080, height: 1080 } });
  await page.goto(pathToFileURL(path.join(dir, `${name}.html`)).href);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(dir, "png", `${name}.png`) });
  await page.close();
}
await browser.close();
console.log("Done:", path.join(dir, "png"));
