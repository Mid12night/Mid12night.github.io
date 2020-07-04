$(function () {

    $('.center').slick({
        variableWidth: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 2000,
        arrows: false
    });

    $('.single-item').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        autoplay: false,
        autoplaySpeed: 4000,
        speed: 2000,
        infinite: true
    });

    $('.comment-slider__inner').slick({
        dots: true,
        infinite: true,
        arrows:true
    });

});