const samples = require('./src/_data/samples.json');
const puppeteer = require('puppeteer');
const { exit } = require('process');
const yargs = require('yargs');
const fs = require('fs');

const args = yargs(process.argv.slice(2))
  .usage('Usage: $0 [options]')

  .describe('f', 'Font to use for screenshots')
  .alias('f', 'font')

  .describe('l', 'Code sample to use for screenshot')
  .alias('l', 'lang')

  .describe('t', 'Theme to use for screenshots')
  .alias('t', 'theme')

  .describe('parallel', 'Run the screenshots in parallel\n ~ Be careful when running too many screenshots at once.')

  .help('h')
  .alias('h', 'help')

  .example('node $0 -f source-code-pro -l js -t dark', 'Take a screenshot of the Source Code Pro font, using the JavaScript code sample, and the dark theme.\n')
  .example('node $0 -f menlo -l all -t light', 'Take a screenshot of the Menlo font, using all of the code samples, and the light theme.\n')
  .example('node $0 -f all -l all -t all', 'Take a screenshot of all of the fonts, using all of the code samples, and all of the themes.\n')
  .example('node $0 -f input -l all -t all --parallel', 'Take a screenshot of the Input font, using all of the code samples, all of the themes, and do so in parallel.')

  .demandOption(['lang', 'font', 'theme'])

  .wrap(115)
  .epilog('Developed for Coding Fonts (https://coding-fonts.css-tricks.com/)')
  .argv;

const buildFontDirectories = (fonts) => {
  fonts.forEach((font) => {
    const directory = `src/screenshots/${font}`;

    if (!fs.existsSync(directory)) {
      console.log(`${directory} does not exist. Making directory...`);
      fs.mkdirSync(directory);
    }
  });
};

const takeScreenshots = async (font, lang, theme) => {
  console.log(`Taking screenshot for:`);
  console.log(` => Font:\t${font}`);
  console.log(` => Language:\t${lang}`);
  console.log(` => Theme:\t${theme}`);

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 800,
    height: 600,
    deviceScaleFactor: 2
  });

  page.on('console', msg => console.warn('Browser Log:', msg.text()));

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
};

const parseInputs = (fonts, langs, themes) => {
  fonts = fonts === 'all'
    ? fs.readdirSync('./src/fonts')
        .filter((file) => file.endsWith('.md'))
        .map((file) => file.replace('.md', '').toLocaleLowerCase())
    : [fonts.toLocaleLowerCase()]

  langs = langs === 'all'
    ? samples.languages.map(lang => lang.value)
    : [langs];

  themes = themes === 'all'
    ? samples.themes
    : [themes];

  return [fonts, langs, themes];
};

const run = async (fonts, langs, themes, parallel) => {
  console.log(`Running in ${parallel ? 'parallel' : 'serial'} mode`);
  console.log(`Taking ${fonts.length * langs.length * themes.length} screenshots\n`);

  const asyncForEach = async (array, callback) => {
    for (let i = 0; i < array.length; i++) {
      await callback(array[i], i, array);
    }
  };

  if (parallel) {
    fonts.forEach(async (font) => {
      langs.forEach(async (lang) => {
        themes.forEach(async (theme) => {
          try {
            await takeScreenshots(font, lang, theme);
          } catch (e) {
            console.error('\nAn error occurred. Please review the stack trace below and report the issue if necessary.\n');
            console.error(e);
            exit();
          }
        });
      });
    });
  } else {
    await asyncForEach(fonts, async (font) => {
      await asyncForEach(langs, async (lang) => {
        await asyncForEach(themes, async (theme) => {
          try {
            await takeScreenshots(font, lang, theme);
          } catch (e) {
            console.error('\nAn error occurred. Please review the stack trace below and report the issue if necessary.\n');
            console.error(e);
            exit();
          }
        });
      });
    });
  }
}

const main = async () => {
  let fonts = args.font;
  let langs = args.lang;
  let themes = args.theme;
  let parallel = args.parallel;

  [fonts, langs, themes] = parseInputs(fonts, langs, themes);

  buildFontDirectories(fonts);

  run(fonts, langs, themes, parallel);
};

main();
