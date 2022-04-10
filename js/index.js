const btn = document.querySelector('.btn');
const title = document.querySelector('.title');

const img = document.querySelector('img');

const demo = document.querySelector('.demo');

const input = document.querySelector('.input');

img.addEventListener('load', function () {
  console.log('page loaded');
});

// title.addEventListener('mouseenter', function () {
//   title.style.color = 'green';
// });

// title.addEventListener('mouseleave', function () {
//   title.style.color = '#000';
// });

// input.addEventListener('keydown', function (event) {
//   console.log(event);
//   demo.innerHTML = event.charCode;
// });

// btn.addEventListener('contextmenu', function () {
//   let x = document.createElement('h1');
//   x.innerHTML = 'New element Created';
//   demo.appendChild(x);
// });
