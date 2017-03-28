// module__top
(function() {

    // height detect function
    function heightDetect(){
        $('.jsHeight').css( 
            'height', (parseInt($(window).height())-105) + "px"
        );
    };

    $(window).on('load resize', heightDetect);


    // hover function
    $(".jsHover").hover(function(){
        $(this).closest('.jsBg').addClass('jsWhite');
    }, function(){
        $(this).closest('.jsBg').removeClass('jsWhite')
    });


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


    // scroll function 
    var windowHeight = $(window).height();

    $('.jsScroll').click(function(event) {
        $('body').animate({
            scrollTop: windowHeight
        },1000);        
    });

})();
