const titles = document.querySelectorAll('.dropdown-title');
const navList = document.querySelector('.nav-list');

titles.forEach(function (item) {
  item.addEventListener('click', function () {
    const menu = item.nextElementSibling;

    if (menu.style.opacity == 0) {
      menu.style.visibility = 'visible';
      menu.style.opacity = 1;
      menu.style.transform = 'translateY(-10px)';
    } else {
      menu.style.visibility = 'hidden';
      menu.style.opacity = 0;
      menu.style.transform = 'translateY(0px)';
    }
  });
});

navList.addEventListener('click', function (e) {
  if (e.target.className == 'dropdown-title') {
    const menu = e.target.nextElementSibling;

    if (menu.style.opacity == 0) {
      menu.style.visibility = 'visible';
      menu.style.opacity = 1;
      menu.style.transform = 'translateY(-10px)';
    } else {
      menu.style.visibility = 'hidden';
      menu.style.opacity = 0;
      menu.style.transform = 'translateY(0px)';
    }
  }
});

navList.addEventListener('click', function (e) {
  if (e.target.className == 'dropdown-title') {
    const menu = e.target.nextElementSibling.classList;
    menu.toggle('dropdown-toogle');
  }
});
