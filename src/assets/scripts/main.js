function setUrlQueryParam (key, value) { 
  var params = new URLSearchParams(location.search);
  params.set(key, value);
  var paramsString = '?' + params.toString();
  history.replaceState(null, null, paramsString);
  setUrlParamsForAllLinks(key, value);
}

function setUrlParamsForAllLinks (key, value) {
  document.querySelectorAll('.fonts-nav a').forEach(function ($a) { 
      try {
        var url = new URL($a.href);
        url.searchParams.set(key, value);
        $a.href = url.toString();
      } catch (e) { 
        console.warn(e) 
      }
    });
}

window.addEventListener('load', function () {
  var params = new URLSearchParams(location.search),
      theme = params.get('theme'),
      language = params.get('language');

  if (theme)
    setUrlParamsForAllLinks('theme', theme);

  if (language)
    setUrlParamsForAllLinks('language', language)
})

// TODO: polyfill URLSearchParams for IE11? (https://github.com/jerrybendy/url-search-params-polyfill)