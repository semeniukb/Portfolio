const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close'),
      overlay = document.querySelector('.menu__overlay')
      list = document.querySelector('.menu__list')

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});
closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});
overlay.addEventListener('click', () => {
    menu.classList.remove('active');
});
list.addEventListener('click', () => {
    menu.classList.remove('active');
});