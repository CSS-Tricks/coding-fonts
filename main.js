const toggleButton = document.querySelector('header button');
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
  const removeIcon = theme === 'dark' ? 'sun' : 'moon';
  
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  toggleButton.removeAttribute('class', removeIcon);
  toggleButton.setAttribute('class', icon);
}

toggleButton.addEventListener('click', switchTheme, false);
