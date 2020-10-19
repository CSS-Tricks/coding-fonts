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

const fontInfo = window.allFonts.find(({ title }) => title === font);
if (fontInfo) {
  if (fontInfo.stylesheet_url) {
    injectStylesheet((fontInfo.styleseet_absolute ? '' : '../../assets/fonts/') + fontInfo.stylesheet_url)
  } // else not free/open source, so assumes is locally active
  code.style.fontFamily = fontInfo.title;
}
