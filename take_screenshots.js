const argv = require("minimist")(process.argv.slice(2));
const puppeteer = require("puppeteer");
const fs = require("fs");

// Check that the font directory exists
// and create it, if not.
let dir = `src/screenshots/${argv.font}`;

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

(async () => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  // Make High Res
  await page.setViewport({
    width: 800,
    height: 600,
    deviceScaleFactor: 2,
  });

  await page.goto(
    `http://localhost:8080/code_samples/${argv.lang}?font=${argv.font}&theme=${argv.theme}`,
    {
      waitUntil: "networkidle0",
      timeout: 60000,
    }
  );

  await page.screenshot({
    path: `src/screenshots/${argv.font}/${argv.lang}-${argv.theme}.png`,
  });

  await browser.close();
})();
