$(document).ready(function() {
    $("#lightSlider").lightSlider({
      item: 2,
      slideMove:1,
      slideMargin: 0,
      loop:true,
      autoWidth: true,
      slideMargin: 30,
      addClass: 'testimonials__lightSlider',
      controls: false,
      currentPagerPosition: 'right'
    });
  });

document.querySelector('.mobile-menu-switcher').addEventListener('click', (e) => {
  e.target.classList.toggle('mobile-menu-switcher--active')
  document.querySelector('.main-nav__items').classList.toggle('main-nav__items--mobile');
  let menuItem = document.querySelectorAll('.main-nav__item');
  menuItem.forEach((item, i) => {
    item.classList.toggle('main-nav__item--mobile')
  });

})

let rates_buttons = document.querySelectorAll('.rates__buttons-block > a')

console.log(navigator.userAgent);
