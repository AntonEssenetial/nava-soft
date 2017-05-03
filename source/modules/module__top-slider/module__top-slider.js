// module__top-slider
(function() {

    $(document).ready(function($) {
       // slick slider 
        var slider1 = $('.jsSlick')
        slider1.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: true,
            fade: true,
            nextArrow: '.slick-prev',
            prevArrow: '.slick-next'
        }); 
    });

})();
