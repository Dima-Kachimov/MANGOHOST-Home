


// Слайдер
$(document).ready(function(){
    $('.slider').slick({

    }); 
})








// Модально окно
const btnLogin = document.querySelector('.nav__login');
const modalWindow = document.querySelector('.modal-Login');
const loginClose = document.querySelector('.modal-login__close');
const scroll = document.querySelector('body');


btnLogin.addEventListener('click', function(){
    modalWindow.classList.toggle('_hidden');
})

btnLogin.addEventListener('click', function(){
    scroll.classList.toggle('_overflow');
})

loginClose.addEventListener('click', function(){
    modalWindow.classList.toggle('_hidden');
})

loginClose.addEventListener('click', function(){
    scroll.classList.remove('_overflow');
})

modalWindow.addEventListener('click', function(){
    modalWindow.classList.add('_hidden');
})

modalWindow.addEventListener('click', function(){
    scroll.classList.remove('_overflow');
})

modalWindow.querySelector('.modal-Login__wrapper').addEventListener('click', function(e){
    e.stopPropagation();
})








// BACK-TO-TOP
$(window).scroll(function(){
    let scrolled = $(window).scrollTop();

    if(scrolled > 300){
        $('#back-to-top').addClass('active');
    } else {
        $('#back-to-top').removeClass('active');
    }
})

$('#back-to-top').click(function(){
    $('body,html').animate({scrollTop: 0},1000);
})



// Меню бургер
const bottomBurger = document.querySelector('.nav__burger');

bottomBurger.addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.nav__list').classList.toggle('open');

    // const body = document.querySelector('body').classList.toggle('_overflow-burger');
    
})



