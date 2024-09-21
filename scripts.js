$(document).ready(function(){   
    $('.slider').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.image-gallery img').on('click', function(){
        var imgSrc = $(this).attr('src');
        $('.main-image img').attr('src', imgSrc);
    });
});