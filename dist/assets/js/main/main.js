'use strict';

// svg4everybody();

$(function() {
    FastClick.attach(document.body);
});
  
// Modules
// Sandwitch
(function() {

    $('.jsMobileDropdown').click(function(event) {
        var menu = $('.main-menu');
        $(this).toggleClass('active');
        menu.toggleClass('active');
        $('body').toggleClass('page_mobile-menu');
    });

})();

// custom select
(function() {

    $('select').styler();
    $('.jq-selectbox__dropdown ul').mCustomScrollbar({
        scrollInertia:100,
        autoExpandScrollbar: true
    });

})();

