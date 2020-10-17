const argv = require('minimist')(process.argv.slice(2));
const puppeteer = require('puppeteer');
const fs = require('fs');

// TODO: Could we pull this from the file system?
const allFonts = [
  'Anonymous Pro',
  'Fira Code',
  'FiraFlott',
  'Hasklig',
  'Iosevka',
  'JetBrains Mono',
  'Menlo',
  'Ubuntu Mono'
];

// Check that the font directory exists
// and create it, if not.
let dir = `src/screenshots/${argv.font}`;

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

async function takeScreenshot(lang, font, theme) {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Make High Res
  await page.setViewport({
    width: 800,
    height: 600,
    deviceScaleFactor: 2
  });

  await page.goto(
    `http://localhost:8080/code_samples/${lang}?font=${font}&theme=${theme}`,
    {
      waitUntil: 'networkidle0',
      timeout: 100000
    }
  );

  await page.screenshot({
    path: `src/screenshots/${font}/${lang}-${theme}.png`
  });

  await browser.close();

  return Promise.resolve(1);
}

if (argv.all) {
  allFonts.forEach((font) => {
    async function takeScreenshotsSlowly() {
      await takeScreenshot('html', font, 'light');
      await takeScreenshot('html', font, 'dark');

      await takeScreenshot('css', font, 'light');
      await takeScreenshot('css', font, 'dark');

      await takeScreenshot('js', font, 'light');
      await takeScreenshot('js', font, 'dark');
    }
    takeScreenshotsSlowly();
  });
} else {
  takeScreenshot(argv.lang, argv.font, argv.theme);
}
