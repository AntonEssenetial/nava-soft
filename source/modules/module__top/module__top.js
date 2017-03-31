// module__top
(function() {

    // height detect function
    function heightDetect(){
        if ($(window).width() <= 1900){
            $('.jsHeight').css( 
                'height', (parseInt($(window).height())-70) + "px"
            );
        } else {
            $('.jsHeight').css( 
                'height', (parseInt($(window).height())-105) + "px"
            );
        }
    }

    $(window).on('load resize', heightDetect);


    // hover function
    $(".jsHover").hover(function(){
        $(this).closest('.jsBg').addClass('jsWhite');
    }, function(){
        $(this).closest('.jsBg').removeClass('jsWhite')
    });


    // scroll function 
    var windowHeight = $(window).height();

    $('.jsScroll').click(function(event) {
        $('body').animate({
            scrollTop: windowHeight
        },1000);        
    });

})();
