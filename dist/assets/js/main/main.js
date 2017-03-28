'use strict';

// svg4everybody();

$(function() {
    FastClick.attach(document.body);
});
  
// Modules
// module__grid
(function() {

    // detect elements
    var $animation_elements = $('.jsGrid');
    var $window = $(window);
    
    function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);
     
      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
     
        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
          $element.addClass('animated fadeInUp');
        } else {
          $element.removeClass('animated fadeInUp');
        }
      });
    }
    
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');

})();

// module__our-work
(function() {

    // height detect function
    function heightDetect2(){
        $('.jsHeight2').css( 
            'height', $(window).height()
        );
    };

    $(window).on('load resize', heightDetect2);


    // detect elements
    var $animation_elements = $('.jsAnim');
    var $window = $(window);
    
    function check_if_in_view() {
      var window_height = $window.height();
      var window_top_position = $window.scrollTop();
      var window_bottom_position = (window_top_position + window_height);
     
      $.each($animation_elements, function() {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
     
        //check to see if this current container is within viewport
        if ((element_bottom_position >= window_top_position) &&
            (element_top_position <= window_bottom_position)) {
          $element.addClass('animated fadeInUp');
        } else {
          $element.removeClass('animated fadeInUp');
        }
      });
    }
    
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');

})();

// // module__top-slider
// (function() {

// 	// Your code here

// })();

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
//(function() {


//})();

