const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementByID('image3');
const textBox = dcument.getElementByID('text-box');

function darkMode() {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%';
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%';
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    lightMode();
  }
}

toggleSwitch.addEventListener('change', switchTheme);
