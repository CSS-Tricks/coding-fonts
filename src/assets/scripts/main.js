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

function goto (href) {
  function revertToRegularNavigation () {
    location.href = href;
  }

  var xhr = new XMLHttpRequest();
  
  xhr.onload = function () {
    var response = xhr.responseXML;
    var title = response.title || '',
        $main = response.querySelector('[data-site-main]');
    if ($main) {
      document.querySelector('[data-site-main]').innerHTML = $main.innerHTML;
      history.pushState({}, title, href);
      document.title = title;
      document.querySelectorAll('[data-nav-item]').forEach(function ($a) {
        $a.classList.toggle('active', $a.href === href || $a.getAttribute('href') === href)
      })
      window.scrollTo({ behavior: 'smooth', top: 0 });
      document.body.classList.add('no-transition');

      setTimeout(function () {
        setupLanguageControlsStyle();
        document.body.classList.remove('no-transition');
      }, 100);

      setStateFromUrlParams();

    } else {
      revertToRegularNavigation();
    }
  }
  
  xhr.onerror = revertToRegularNavigation;
  
  xhr.open('GET', href);
  xhr.responseType = 'document';
  xhr.send();
}

function setupAjaxNavigation () {
  // riffing off https://github.com/terabaud/eleventy-mini-spa/
  document.querySelectorAll('[data-nav-item]').forEach(function ($a) { 
    $a.addEventListener('click', function(event) {
      event.preventDefault();
      var href = $a.href;
      
      if (href === location.href) {
        return
      }

      goto(href);
    })
  })
}

function setupLanguageControlsStyle () {
  document.querySelectorAll('label[data-language').forEach(function ($control, i) {
    if (i === 0) {
      $control.parentNode.classList.add('with-widths')
    }

    $control.parentNode.style.setProperty('--width-' + $control.dataset.language, $control.clientWidth + 'px');
    $control.parentNode.style.setProperty('--left-' + $control.dataset.language, $control.offsetLeft + 'px');
  })
}

function setupStickyObserver () {
  if (!'IntersectionObserver' in window) return
  var observer = new IntersectionObserver(
    function (entries) {
      entries[0].target.classList.toggle('stuck', entries[0].intersectionRatio < 1)
    }, {
      threshold: 1
    }
  )

  document.querySelectorAll('[data-sticky]').forEach(function ($el) {
    $el.style.top = '-1px'; // setting this here to avoid sticky weirdness if IntersectionObserver isn't supported
    observer.observe($el);
  })
}

window.addEventListener('load', function () {
  setupAjaxNavigation();
  setStateFromUrlParams();
  setupLanguageControlsStyle();
  setupStickyObserver();
})

// TODO: polyfill URLSearchParams for IE11? (https://github.com/jerrybendy/url-search-params-polyfill)