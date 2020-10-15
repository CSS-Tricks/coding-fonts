# FiraFlott
## A free Operator Mono-Alternative based on [FiraCode](https://github.com/tonsky/FiraCode) and [FlottFlott](https://www.dafont.com/flottflott.font)
### Note: New font-combination available (Fira Code with Pacifico), looks much better -> [here](https://github.com/kosimst/Firicico)

Font that combines Mono font from FiraCode (also in Bold) including Font-Ligatures with FlottFlott as Italic font.
Tested with VSCode, but should support every Editor that supports italics.

### Installation Guide
1. Download TTF-Folder
2. Install **ALL** TTF-Font-Files on your PC
3. Enable Italics in your Editor of Choice (also enable Font-Ligatures)

### Customization
As I have optimized the Fonts for VSCode with default font size (14px),
there may be Issues with size of the different (italic=FlottFlott and FiraCode) fonts. I provided BirdFont-Files in the 
BirdFont-Folder, which can be customized with the free Font-Editor [Birdfont](https://birdfont.org/
). Just open the HTML-Files with BirdFont, edit them (e.g resize them) and export them as TTF-Files (with Ctrl+e). Just 
**do not change** the Font Name or any other details, otherwise it wont work.

### VSCode specific
With the font installed, all italics will be written in the FlottFlott-Font. In your VSCode-Settings you can customize what 
will be written in italics (and so in FlottFlott). The setting you need is called "editor.tokenColorCustomizations".

For example, my config looks like this (comments are invalid JSON-Syntax, I know, but it's easier to understand):
```
"editor.tokenColorCustomizations": {
  "textMateRules": [
    {
      "scope": [
        //following will be in italic (=FlottFlott)
        "comment",
        "entity.name.type.class", //class names
        "keyword", //import, export, return…
        "constant", //String, Number, Boolean…, this, super
        "storage.modifier", //static keyword
        "storage.type.class.js", //class keyword
      ],
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "scope": [
        //following will be excluded from italics (VSCode has some defaults for italics)
        "invalid",
        "keyword.operator",
        "constant.numeric.css",
        "keyword.other.unit.px.css",
        "constant.numeric.decimal.js",
        "constant.numeric.json"
      ],
      "settings": {
        "fontStyle": ""
      }
    }
  ]
}
```

> **Note**: Images will be added soon
