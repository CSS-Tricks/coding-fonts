# Coding Fonts

A microsite that shows off fonts designed for writing code.

https://coding-fonts.css-tricks.com/

## Running this site.

- `npm install`
- `npm run serve`

## Adding a font

- Start server (see above)
- If the font is open source, put a copy of the font in the `fonts` folder. At the very least a `.woff2` file in a folder of the fonts name. e.g. `/src/assets/fonts/NewFont/NewFont.woff2`
- Make a stylesheet that gets that font ready to use in that font folder. e.g. `/src/assets/fonts/NewFont/NewFont.css`
- Add a file like `new-font.md` to `/src/fonts`. Add the font's information. Mark the URL of the stylesheet from the previous step in the `stylesheet_url` field, relative to `/src/assets/fonts/`. If the URL is absolute, i.e. not added to the repo, add a `stylesheet_absolute: true` field. [See this one](https://github.com/chriscoyier/coding-fonts/blob/master/src/fonts/fira-code.md) as an example.
- To preview what will be screenshot, the URL structure is like: http://localhost:8080/code_samples/html/?font=anonymous-pro&theme=dark where font matches the kebab-case `Title` of the Markdown file that you created.
- Run the screenshots! This is a local-only process. At the command line: `FONT='consolas' npm run screenshots`. You can change `FONT` to a font name matching the kebab-case `Title` of the Markdown file that you created.

Then make a Pull Request for it. You should be able to see a built preview on Netlify as part of the PR.

## NPM Commands

Take all screenshots for one font:

```bash
FONT='font-name' npm run screenshots
```

Take all screenshots:

```bash
npm run screenshots:all
```

Take specific language screenshots

```bash
FONT='font-name' npm run screenshots:js
FONT='font-name' npm run screenshots:html
FONT='font-name' npm run screenshots:css
FONT='font-name' npm run screenshots:charmap
```

## Taking Screenshots Using takeScreenshots.js

You can take control of the screenshots 

takeScreenshots accepts the follow arguments:
```
Options:
  --version    Show version number
  -f, --font   Font to use for screenshots
  -l, --lang   Code sample to use for screenshot
  -t, --theme  Theme to use for screenshots
  --parallel   Run the screenshots in parallel
  -h, --help   Show help
```

`--font`, `--lang`, and `--theme` all accept the 'all' keyword to handle taking screenshots of all of their respective data points.

The `--parallel` flag allows the running of Puppeteer in parallel which is useful if you need to repeatedly take screenshots of a font. Do note that this will spawn as many Puppeteer instances as you have the total permutations you request.
Take the following command for example.

```
node takeScreenshots.js -f source-code-pro -l all -t all
```

It will spawn 8 Puppeteer instances (1 font * 4 languages * 2 themes = 8 instances) all at once to take the screenshots. This is usually fine and doesn't result in any issues but in the event you were to do this for all fonts as well, you'd spawn hundreds of instances which will almost always in a failure.
