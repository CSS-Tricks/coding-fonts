function injectStylesheet(url) {
  const head = document.getElementsByTagName('head')[0];
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  link.media = 'all';
  head.appendChild(link);
}

// Get info from URL on how to set up page.
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Set the stylesheet
let stylesheet;
if (urlParams.get('theme') === 'dark') {
  stylesheet = '../../assets/styles/prism-dark.css';
} else {
  stylesheet = '../../assets/styles/prism-light.css';
}
injectStylesheet(stylesheet);

// Set the font
const font = urlParams.get('font');
const code = document.querySelector('pre > code');

if (font === 'Fira Code') {
  injectStylesheet('../../assets/fonts/Fira_Code_v5.2/fira_code.css');
  code.style.fontFamily = 'Fira Code';
} else if (font === 'Operator Mono') {
  // Not free/open source, so assumes is locally active
  code.style.fontFamily = 'Operator Mono';
} else if (font === 'Ubuntu Mono') {
  injectStylesheet(
    'https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital@0;1&display=swap'
  );
  code.style.fontFamily = 'Ubuntu Mono';
} else if (font === 'Anonymous Pro') {
  injectStylesheet(
    'https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital@0;1&display=swap'
  );
  code.style.fontFamily = 'Anonymous Pro';
} else if (font === 'JetBrains Mono') {
  injectStylesheet('../../assets/fonts/jetbrains-mono/jetbrains-mono.css');
  code.style.fontFamily = 'JetBrains Mono';
} else if (font === 'FiraFlott') {
  injectStylesheet('../../assets/fonts/FiraFlott/woff/stylesheet.css');
  code.style.fontFamily = 'firaflott';
} else if (font === 'Menlo') {
  injectStylesheet('../../assets/fonts/Menlo/menlo.css');
  code.style.fontFamily = 'Menlo';
} else if (font === 'Hasklig') {
  injectStylesheet('../../assets/fonts/Hasklig-1.1/stylesheet.css');
  code.style.fontFamily = 'hasklig';
} else if (font === 'Iosevka') {
  injectStylesheet('../../assets/fonts/iosevka/stylesheet.css');
  code.style.fontFamily = 'Iosevka';
} else if (font === 'Operator Mono') {
  code.style.fontFamily = 'Operator Mono';
}
