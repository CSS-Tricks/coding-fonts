# Coding Fonts

## The Plan

1. Take 6 screenshots of each font in the below list. One for HTML, CSS, and JS in a Dark Theme and a Light Theme.
1. Make a nice little microsite at coding-fonts.css-tricks.com

## The List

- Fira Code – https://github.com/tonsky/FiraCode
- FiraFlott - https://github.com/kosimst/FiraFlott
- Operator Mono – https://www.typography.com/fonts/operator/overview
- Iosevka – https://github.com/be5invis/Iosevka
- SF Mono – https://developer.apple.com/fonts/
- Cascadia Code – https://github.com/microsoft/cascadia-code
- Ubuntu Mono - https://design.ubuntu.com/font/
- Hasklig - https://github.com/i-tu/Hasklig
- Source Code Pro – https://fonts.google.com/specimen/Source+Code+Pro
- Anonymous Pro - https://www.marksimonson.com/fonts/view/anonymous-pro
- Fantasque - https://github.com/belluzj/fantasque-sans
- Jetbrains Mono - https://www.jetbrains.com/lp/mono/
- Roboto Mono - https://fonts.google.com/specimen/Roboto+Mono
- Sudo - https://github.com/jenskutilek/sudo-font
- Victor Mono - https://rubjo.github.io/victor-mono/
- Monoid - https://github.com/larsenwork/monoid
- IBM Plex Mono - https://fonts.google.com/specimen/IBM+Plex+Mono
- Menlo - https://en.wikipedia.org/wiki/Menlo_(typeface)
- Hack – https://sourcefoundry.org/hack/
- Cousine - https://fonts.google.com/specimen/Cousine
- Consolas - https://docs.microsoft.com/en-us/typography/font-list/consolas
- PT Mono - https://fonts.google.com/specimen/PT+Mono
- Droid Sans Mono - https://www.fonts.com/font/ascender/droid-sans-mono?QueryFontType=Web&src=GoogleWebFonts
- Liberation Mono - https://www.fontsquirrel.com/fonts/liberation-mono
- EnvyCode Mono - https://www.fontsquirrel.com/fonts/envy-code-r
- Inconsolata - https://fonts.google.com/specimen/Inconsolata
- Input – https://input.fontbureau.com/
- DejaVu – https://dejavu-fonts.github.io/
- Gintronic – https://bboxtype.com/typefaces/Gintronic/#!layout=specimen
- Recursive Mono – https://www.recursive.design/
- APL386 Unicode - https://abrudz.github.io/APL386/
- MonaLisa – https://monolisa.dev/
- Aglet Mono – https://xyztype.com/fonts/aglet_mono
- PragmataPro – https://fsd.it/shop/fonts/pragmatapro/
- Bitstream Vera Sans Mono - https://www.fontsquirrel.com/fonts/bitstream-vera-sans-mono
- SF Mono - https://developer.apple.com/fonts/
- Courier Prime - https://fonts.google.com/specimen/Courier+Prime

### Intentionally Not On List

- Courier - https://fonts.adobe.com/fonts/courier
- Monaco - https://en.wikipedia.org/wiki/Monaco_(typeface)
- Dank Mono – https://gumroad.com/l/dank-mono (Deprecated by author)
- DEC Termimal Modern - https://www.dafont.com/dec-terminal-modern.font (Kinda cheezy, designed for a certain aesthetic not for actual coding.)

### TODO

- Trim the list above if any of the fonts don't seem worthy of including in this list. The list of fonts shown here should be of high quality and definitely worth a look for usage in day to day coding. If we remove any, make a documented list of intentionally removed fonts.
- See if anything good here we missed: https://en.wikipedia.org/wiki/List_of_monospaced_typefaces
- See if anything good here we missed: https://www.fontsquirrel.com/fonts/list/classification/monospaced

## Running this site.

- `npm install`
- `npm run serve`

## Taking Screenshots

- Server must be running.
- If the font is open source, put a copy of the font in the `fonts` folder.
- Make a stylesheet that gets that font ready to use in that font folder
- See `samples/main.js` for how to get service ready to shoot that font. It injects the stylesheet and sets the font.
- Run script like `FONT='Fira Code' npm run screenshots`
