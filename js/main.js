$(function () {
    // topBanner
    $('.topBanner i').on('click', function () {
        $('.topBanner').addClass('on')
    });
    // mainSlide
    $('.mainSlide').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pasueOnHover: false,
        pasueOnFocus: false,
        prevArrow: false,
        nextArrow: false,
    });


});