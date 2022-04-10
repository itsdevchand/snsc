const hamburgerMenu = document.querySelector('.hamburger-menu');
const crossBtn = document.querySelector('.float-cross');
const floatMenu = document.querySelector('.float-menu');
const overlay = document.querySelector('.overlay');

hamburgerMenu.addEventListener('click', function () {
  floatMenu.style.transform = 'translateX(0px)';
  overlay.style.display = 'block';
});

crossBtn.addEventListener('click', function () {
  floatMenu.style.transform = 'translateX(310px)';
  overlay.style.display = 'none';
});

overlay.addEventListener('click', function () {
  floatMenu.style.transform = 'translateX(310px)';
  overlay.style.display = 'none';
});
