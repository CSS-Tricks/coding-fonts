# Coding Fonts

A microsite that shows off fonts designed for writing code.

https://coding-fonts.css-tricks.com/

## Running this site.

- Install dependencies: `npm install`
- Start server: `npm run dev`

## Adding a font

- Start server (see above)
- If the font is open source, put a copy of the font in the `fonts` folder. At the very least a `.woff2` file in a folder of the fonts name. e.g. `/src/assets/fonts/NewFont/NewFont.woff2`
- Make a stylesheet that gets that font ready to use in that font folder. e.g. `/src/assets/fonts/NewFont/NewFont.css`
- Add a file like `new-font.md` to `/src/fonts`. Add the font's information. Mark the URL of the stylesheet from the previous step in the `stylesheet_url` field, relative to `/src/assets/fonts/`. If the URL is absolute, i.e. not added to the repo, add a `stylesheet_absolute: true` field. [See this one](https://github.com/chriscoyier/coding-fonts/blob/master/src/fonts/fira-code.md) as an example.
- To preview what will be screenshot, the URL structure is like: http://localhost:8080/code_samples/html/?font=anonymous-pro&theme=dark where font matches the kebab-case `Title` of the Markdown file that you created.
- Take screenshots! This is a local-only process. Follow the [taking screenshots instructions](#taking-screenshots) in the command line.
- Make a Pull Request for it. You should be able to see a built preview on Netlify as part of the PR.

## Taking Screenshots

You can take screenshots using the included `takeScreenshots.js` file. The options are listed in the help screen below.

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

### Additional Examples

```bash
# Take a screenshot of the Source Code Pro font, using the JavaScript code sample, and the dark theme.
node takeScreenshots.js -f source-code-pro -l js -t dark

# Take a screenshot of the Menlo font, using all of the code samples, and the light theme.
node takeScreenshots.js -f menlo -l all -t light

# Take a screenshot of all of the fonts, using all of the code samples, and all of the themes.
node takeScreenshots.js -f all -l all -t all

# Take a screenshot of the Input font, using all of the code samples, all of the themes, and do so in parallel
node takeScreenshots.js -f input -l all -t all --parallel

```
