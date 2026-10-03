// Renders the ad HTML files to PNG at exact pixel size.
// Usage: node export-png.mjs   (needs Playwright: npm i -D playwright, or a global install)
// Writes png/<name>.png and png/<name>-guides.png (safe-zone check, story only; never upload that one).
import { chromium } from "playwright";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const dir = path.dirname(fileURLToPath(import.meta.url));
const jobs = [
  { file: "founder-letter-feed-1080x1350.html", w: 1080, h: 1350 },
  { file: "founder-letter-story-1080x1920.html", w: 1080, h: 1920, guides: true },
];

const browser = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {}
);
for (const job of jobs) {
  const page = await browser.newPage({ viewport: { width: job.w, height: job.h }, deviceScaleFactor: 1 });
  const url = pathToFileURL(path.join(dir, job.file)).href;
  const name = job.file.replace(".html", "");
  await page.goto(url);
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: path.join(dir, "png", `${name}.png`) });
  if (job.guides) {
    await page.goto(`${url}?guides`);
    await page.screenshot({ path: path.join(dir, "png", `${name}-guides.png`) });
  }
  await page.close();
}
await browser.close();
console.log("Done. PNGs in", path.join(dir, "png"));
