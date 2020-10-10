# Coding Fonts

## The Plan

1. Take 6 screenshots of each font in the below list. One for HTML, CSS, and JS in a Dark Theme and a Light Theme.
1. Make a nice little microsite at coding-fonts.css-tricks.com

## The List

### Free

- Fira Code – https://github.com/tonsky/FiraCode
- Iosevka – https://github.com/be5invis/Iosevka
- SF Mono – https://developer.apple.com/fonts/
- Cascadia Code – https://github.com/microsoft/cascadia-code
- Ubuntu Mono
- FiraFlott
- Hasklig
- Source Code Pro – https://fonts.google.com/specimen/Source+Code+Pro
- Anonymous Pro
- Fantasque
- Jetbrains Mono
- Roboto Mono
- Sudo
- Victor Mono
- Monoid
- Victor Mono
- IBM Plex Mono
- Menlo
- Hack – https://sourcefoundry.org/hack/
- Cousine
- Consolas
- PT Mono
- Monaco
- Droid Sans Mono
- Liberation Mono
- EnvyCode Mono
- Dec Terminal Modern
- Inconsolata - https://fonts.google.com/specimen/Inconsolata
- Input – https://input.fontbureau.com/
- DejaVu – https://dejavu-fonts.github.io/
- Gintronic – https://bboxtype.com/typefaces/Gintronic/#!layout=specimen
- Recursive Mono – https://www.recursive.design/
- APL386 Unicode - https://abrudz.github.io/APL386/

### Not Free

- Operator Mono – https://www.typography.com/fonts/operator/overview
- MonaLisa – https://monolisa.dev/
- Aglet Mono – https://xyztype.com/fonts/aglet_mono

### Not On List On Purpose

- PragmataPro – https://fsd.it/shop/fonts/pragmatapro/
- Dank – https://dank.sh (deprecated project)
- Courier (ubituitous monospace font, but nobody seems to actually use it for coding)

## Running this site.

- `npm install`
- `npm run serve`

## Taking Screenshots

- Server must be running.
- If the font is open source, put a copy of the font in the `fonts` folder.
- Make a stylesheet that gets that font ready to use in that font folder
- See `samples/main.js` for how to get service ready to shoot that font. It injects the stylesheet and sets the font.
- Run script like `FONT='Fira Code' npm run screenshots`
