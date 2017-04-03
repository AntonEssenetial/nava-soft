// module__blog-content
(function() {

    // height detect function
    function heightDetect3(){
        if ($(window).width() >= 1100) {
            $('.module__blog__twitter, .module__blog__item__content .row:first-child, .module__blog__item_padding').css( 
                'height', $('.module__blog__grid .module__blog__img').height()
            );
        } else {
            $('.module__blog__twitter, .module__blog__item__content .row:first-child, .module__blog__item_padding').css( 
                'height', 'auto'
            );
        }
    };

    $(window).on('load resize', heightDetect3);

})();
