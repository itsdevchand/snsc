const btns = document.querySelectorAll('.btn');
const menu = document.querySelector('.phone-menu');
// for (let i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click', function () {
//     const list = btns[i].parentElement;
//     menu.removeChild(list);
//   });
// }

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    console.log(e.target);
    const list = btn.parentElement;
    menu.removeChild(list);
  });
});

menu.addEventListener('click', function (e) {
  if (e.target.className == 'btn') {
    const list = e.target.parentElement;
    menu.removeChild(list);
  }
});
