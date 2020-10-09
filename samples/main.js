(function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // Set the stylesheet
  let stylesheet;
  if (urlParams.get("theme") === "dark") {
    stylesheet = "/lib/prism-dark.css";
  } else {
    stylesheet = "/lib/prism-light.css";
  }
  const head = document.getElementsByTagName("head")[0];
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = stylesheet;
  link.media = "all";
  head.appendChild(link);

  // Set the font
  const font = urlParams.get("font");
  const code = document.querySelector("pre > code");

  if (font === "Fira Code") {
    const head = document.getElementsByTagName("head")[0];
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.type = "text/css";
    link.href = "/fonts/Fira_Code_v5.2/fira_code.css";
    link.media = "all";
    head.appendChild(link);
    code.style.fontFamily = "Fira Code";
  }
})();
