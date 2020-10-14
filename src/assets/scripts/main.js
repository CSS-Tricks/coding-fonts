function setUrlParam (key, value) { 
  var params = new URLSearchParams(location.search);
  params.set(key, value);
  var paramsString = '?' + params.toString();
  history.replaceState(null, null, paramsString);
  setUrlParamsForAllLinks(key, value);
}

function setUrlParamsForAllLinks (key, value) {
  document.querySelectorAll('[data-nav-item]').forEach(function ($a) { 
      try {
        var url = new URL($a.href);
        url.searchParams.set(key, value);
        $a.href = url.toString();
      } catch (e) { 
        console.warn(e) 
      }
    });
}

function setStateFromUrlParams () {
  var params = new URLSearchParams(location.search),
      theme = params.get('theme'),
      language = params.get('language');
      
  if (theme) {
    setUrlParamsForAllLinks('theme', theme);
    document.getElementById('control-theme-' + theme).checked = true;
  }
  
  if (language) {
    setUrlParamsForAllLinks('language', language);
    document.getElementById('control-language-' + language).checked = true;
  }
}

function setupAjaxNavigation () {
  // riffing off https://github.com/terabaud/eleventy-mini-spa/
  document.querySelectorAll('[data-nav-item]').forEach(function ($a) { 
    $a.addEventListener('click', function(event) {
      var href = $a.href;
      function revertToRegularNavigation () {
        location.href = href;
      }

      event.preventDefault();
      var xhr = new XMLHttpRequest();

      xhr.onload = function () {
        var response = xhr.responseXML;
        var title = response.title || '',
            $main = response.querySelector('[data-site-main]');
        if ($main) {
          document.querySelector('[data-site-main]').outerHTML = $main.outerHTML;
          history.pushState({}, title, href);
          document.title = title;
          setStateFromUrlParams();
        } else {
          revertToRegularNavigation();
        }
      }

      xhr.onerror = revertToRegularNavigation;

      xhr.open('GET', href);
      xhr.responseType = 'document';
      xhr.send();
    })
  })
}

window.addEventListener('load', function () {
  setStateFromUrlParams();
  setupAjaxNavigation();
})

// TODO: polyfill URLSearchParams for IE11? (https://github.com/jerrybendy/url-search-params-polyfill)