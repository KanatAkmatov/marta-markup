$(function(){
    $('.header-slider').slick({
        arrows: false,
        vertical: true,
        dots: true,
        dotsClass: 'header-dots',
        // autoplay: 2000,
    });

    /*Бургер меню*/
    $('.menu-btn').click(function () {
        $('.menu__list').slideToggle();
    })
});