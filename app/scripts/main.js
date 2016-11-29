$(document).ready(function () {
    var $megaSlider = $('.mega-slider');

    $megaSlider.find('.wrapper').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        prevArrow: $('.slider_controls').find('.arrow-left'),
        nextArrow: $('.slider_controls').find('.arrow-right')
    });
});