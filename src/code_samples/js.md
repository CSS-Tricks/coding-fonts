---
layout: for_screenshot
title: JavaScript Sample
---

<pre class="lang-js"><code>(function() {
  // Init
  const toggleButton = document.querySelector('#module > button');
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleButton.setAttribute('class', 'moon');
    }
  }

  function switchTheme() {
    const theme = localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    const icon = theme === 'dark' ? 'moon' : 'sun';
  
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  toggleButton.addEventListener('click', switchTheme, false);
  
})();</code></pre>
