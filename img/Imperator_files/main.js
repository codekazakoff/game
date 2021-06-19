let hamburger = document.querySelector('.bars_icon');
let logo = document.querySelector('.nav_logo');
let navMenuCenter = document.querySelector('.nav_menu_center');
let navMenuRight = document.querySelector('.nav_menu_right');
let times = document.querySelector('.times');
let basket = document.querySelector('.basket');
hamburger.addEventListener('click', function(){
    navMenuCenter.classList.add('toggle_bars_center');
    navMenuRight.classList.add('toggle_bars_right');
    times.classList.add('active');
    basket.classList.add('no_active');
    hamburger.classList.add('nav_logo_no_active');
    logo.classList.add('nav_logo_no_active');
})
times.addEventListener('click', function(){
    navMenuCenter.classList.remove('toggle_bars_center');
    navMenuRight.classList.remove('toggle_bars_right');
    times.classList.remove('active');
    basket.classList.remove('no_active');
    hamburger.classList.remove('nav_logo_no_active');
    logo.classList.remove('nav_logo_no_active');
})