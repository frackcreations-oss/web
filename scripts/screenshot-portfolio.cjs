const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const outDir = path.join(__dirname, "../public/portfolio");

const sites = [
  { name: "wasil", url: "https://www.getwasil.com/" },
  { name: "yoyocrm", url: "https://yoyocrm.io/" },
  { name: "maktab", url: "https://www.maktabelite.com/" },
  { name: "bilal", url: "https://www.mohammedbilalai.com/" },
];

async function main() {
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });

  for (const site of sites) {
    const page = await context.newPage();
    console.log(`Capturing ${site.url}...`);
    try {
      await page.goto(site.url, { waitUntil: "networkidle", timeout: 90000 });
      await page.waitForTimeout(2500);
      // Dismiss common cookie/modals if present
      await page.keyboard.press("Escape").catch(() => {});
      const file = path.join(outDir, `live-${site.name}.png`);
      await page.screenshot({ path: file, type: "png", fullPage: false });
      console.log(`Saved ${file}`);
    } catch (err) {
      console.error(`Failed ${site.name}:`, err.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("Done");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
