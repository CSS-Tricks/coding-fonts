---
layout: for_screenshot
title: CSS Sample
---

<pre class="lang-css"><code>body {
  --bg-color: #FFFFFF;
  background-color: var(--bg-color);
  max-width: 90%;
  margin: 0 auto;
  font-size: calc(1rem + 0.25vh);
  line-height: 1.5;
}
@media screen and (max-width: 400px) {
  body {
    max-width: 98%;
  }
}

button {
  display: flex;
  align-items: center;
  padding: 0.1rem 0.3rem;
}

button[data-type="moon"]::before {
  content: '\1F31C';
}</code></pre>
