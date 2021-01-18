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
const codes = document.querySelectorAll('pre code');
const pre = document.querySelector('pre');

const fontInfo = window.allFonts.find(({ slug }) => slug === font);
if (fontInfo) {
  if (fontInfo.stylesheet_url) {
    const stylesheetToInject =
      (fontInfo.stylesheet_absolute ? '' : '../../assets/fonts/') +
      fontInfo.stylesheet_url;
    injectStylesheet(stylesheetToInject);
    if (!fontInfo.ligatures || fontInfo.ligatures === 'false') {
      const ligaturesEl = document.getElementById('ligatures');
      if (ligaturesEl) ligaturesEl.style.display = 'none';
    }
  } // else not free/open source, so assumes is locally active
  codes.forEach((code) => {
    code.style.fontFamily = fontInfo.title;
  });
  document.body.style.fontFamily = fontInfo.title;
  pre.style.fontFamily = fontInfo.title;
} else {
  console.warn(`${font} does not appear to be a valid font. Please check the font name.`);
}