document.addEventListener('DOMContentLoaded', () => {
  var menu = document.querySelector('.nav');
  document.querySelector('.close').addEventListener('click', () => {
    menu.classList.remove('open--nav');
  });
  document.querySelector('.overlay').addEventListener('click', () => {
    menu.classList.remove('open--nav');
  });
  document.querySelector('.menu').addEventListener('click', () => {
    menu.classList.add('open--nav');
  });
});
