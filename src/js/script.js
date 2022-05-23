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

const percent = document.querySelectorAll('.scales__percent'),
      lines = document.querySelectorAll('.scales__line-yellow')

percent.forEach( (item, i) =>{
    lines[i].style.width = item.innerHTML;
});



$('#form').validate({
    rules: {
        name: "required",
        email: {
            required: true,
            email: true
        },
        agree: {
            required: true
        }
    },
    messages: {
        agree: {
            required: "Please use checkbox!"
        }
    }
});

