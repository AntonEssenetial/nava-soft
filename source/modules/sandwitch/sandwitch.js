// Sandwitch
(function() {

    $('.jsMobileDropdown').click(function(event) {
        var menu = $('.main-menu');
        $(this).toggleClass('active');
        menu.toggleClass('active');
        $('body').toggleClass('page_mobile-menu');
        menuHeightDetect();
    });

    function menuHeightDetect() {
        if ($(window).width() <= 660){
            $('.main-menu').css(
                'height', $(window).height()
            );
        } else {
            $(".main-menu").css('height', 'auto');
        }
    }

    $(window).on('load resize', menuHeightDetect);

})();
