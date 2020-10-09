const argv = require("minimist")(process.argv.slice(2));
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  await page.goto(
    `http://localhost:5000/samples/${argv.lang}?font=${argv.font}&theme=${argv.theme}`
  );

  await page.screenshot({
    path: `screenshots/${argv.font}/${argv.lang}-${argv.theme}.png`,
  });

  await browser.close();
})();
