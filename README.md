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
- Add a file like `Fira Code.md` to `/src/fonts`, making sure the filename is identical to the font's title. Add the font's information. Mark the URL of the stylesheet from the previous step in the `stylesheet_url` field, relative to `/src/assets/fonts/`. If the URL is absolute, i.e. not added to the repo, add a `stylesheet_absolute: true` field.
- To preview what will be screenshot, the URL structure is like: http://localhost:8080/code_samples/html/?font=Anonymous%20Pro&theme=dark
- Run the screenshots! This is a local-only process. At the command line: `FONT='Fira Code' npm run screenshots`. You change `FONT` to whatever the font name is that you used in `font-sample-loader.js`, ideally matching the name of the Markdown file you're about to create.
- Create a Markdown file in `src/fonts` matching the format you see there. [See this one](https://github.com/chriscoyier/coding-fonts/blob/master/src/fonts/Fira%20Code.md) as an example.

Then make a Pull Request for it. You should be able to see a built preview on Netlify as part of the PR.
