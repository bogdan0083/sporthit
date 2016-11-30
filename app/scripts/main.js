$(document).ready(function () {

    $('[data-toggle="tooltip"]').hover(function () {
        var $this = this;
        var text = $(this).attr('title');
        var boxWidth = $this.getBBox().width;
        setTimeout(function () {

            $('.tooltip').css({
                'top': $this.getBoundingClientRect().top - ( $('.tooltip').outerHeight() / 2 ) - 10,
                'left': $this.getBoundingClientRect().left - ( $('.tooltip').outerWidth() / 2 ) + (boxWidth)
            }).addClass('animated fadeInDown').find('.tooltip-inner').text(text);

        }, 50);

    }, function () {
        $('.tooltip').removeClass('animated fadeInDown');
    });

    var $megaSlider = $('.mega-slider'),
        $schemeSlider = $('.scheme-slider');

    $megaSlider.find('.wrapper').slick({
        autoplay: true,
        infinite: true,
        dots: false,
        prevArrow: $('.slider_controls').find('.arrow-left'),
        nextArrow: $('.slider_controls').find('.arrow-right')
    });

    $schemeSlider.slick({
        autoplay: false,
        arrows: false,
        dots: false,
        fade: true
    });

    var $floorSelectionLinks = $('.floor-selection a');

    $floorSelectionLinks.click(function (e) {
       e.preventDefault();

        $floorSelectionLinks.removeClass('active');

        $(this).addClass('active');

        $('.scheme-slider').slick('slickGoTo', $(this).data('floor'));

        $('.tooltip').removeClass('animated fadeInDown');
    });


    $('.fancybox-modal').fancybox({
        closeBtn: false,
        fitToView: false,
        scrolling: 'visible',
        padding: 0,
        type: 'inline',
        openEffect: 'elastic',
        closeEffect: 'elastic'
    });

    var wow = new WOW({
        mobile: true
    }).init();

    $('.js-modal-timer-trigger').click(function (e) {

        e.preventDefault();

        $.fancybox($('#success-popup'), {
            closeBtn: false,
            fitToView: false,
            scrolling: 'visible',
            padding: 0,
            type: 'inline',
            beforeShow: function () {

                var count = 4;

                var timer = setInterval(function () {

                    if (count === 0) {

                        $.fancybox.close();

                        clearInterval(timer);
                    }

                    $('.js-success-countdown').text(count);
                    count--;

                }, 1000);
            }
        });

    });

    $('.fancybox').fancybox();
});