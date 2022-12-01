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

    $('#f_link').on('change', function () {
        console.log('change', $(this).val());
        var link = $(this).val();

        if (link) {
            window.open(link)
        }
    })

});