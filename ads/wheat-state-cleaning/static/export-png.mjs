// Renders each ad in three sizes to png/. Usage: node export-png.mjs (needs Playwright).
// Also writes a *-story-guides.png per ad for checking the Stories/Reels UI zones. Never upload those.
import { chromium } from "playwright";
import { fileURLToPath, pathToFileURL } from "node:url";
import path from "node:path";

const dir = path.dirname(fileURLToPath(import.meta.url));
const ads = ["ad1-bathtub", "ad2-toilet"];
const sizes = { sq: 1080, feed: 1350, story: 1920 };
const names = { sq: "1080x1080", feed: "feed-1080x1350", story: "story-1080x1920" };

const browser = await chromium.launch();
for (const ad of ads) {
  for (const [size, height] of Object.entries(sizes)) {
    const page = await browser.newPage({ viewport: { width: 1080, height } });
    const url = pathToFileURL(path.join(dir, `${ad}.html`)).href + `?size=${size}`;
    await page.goto(url);
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: path.join(dir, "png", `${ad}-${names[size]}.png`) });
    if (size === "story") {
      await page.goto(url + "&guides");
      await page.screenshot({ path: path.join(dir, "png", `${ad}-story-guides.png`) });
    }
    await page.close();
  }
}
await browser.close();
console.log("Done:", path.join(dir, "png"));
