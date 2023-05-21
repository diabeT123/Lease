

const tabItem = document.querySelectorAll('.choose__tabs-link');
const tabContent = document.querySelectorAll('.choose__tabs-grid-el');

tabItem.forEach(function(element){
    element.addEventListener('click', open);
})

function open(evt){
    const tabTarget = evt.currentTarget;
    const button = tabTarget.dataset.button;

    tabItem.forEach(function(item){
        item.classList.remove('choose__tabs-link--active');

    });

    tabTarget.classList.add('choose__tabs-link--active');
    tabContent.forEach(function(item){
        item.classList.remove('choose__tabs-grid-el--active');
    });

    document.querySelector(`#${button}`).classList.add('choose__tabs-grid-el--active');
}

const menu = document.querySelector('.header__nav-list');
const menuBurger = document.querySelector('.menu__burger');

menuBurger.addEventListener('click', () =>{
    menu.classList.toggle('header__nav-list--active');
})




var swiper = new Swiper(".hero-swiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 2000,
    },
    grabCursor: true,
    loop:true,
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: ["-100%", 00, 0],
        },
        next: {
            translate: ["100%", 0, 0],
        },
    },
    keyboard: true,

});

