'use strict';

svg4everybody();

$(function() {
    FastClick.attach(document.body);
});

// Show the progress bar 
NProgress.start();

// Increase randomly
var interval = setInterval(function() { NProgress.inc(); }, 1000);        

// Trigger finish when page fully loaded
$(window).on('load', function() {
NProgress.start();
    clearInterval(interval);
    NProgress.done();
});

// Trigger bar when exiting the page
$(window).on("unload", function () {
    NProgress.start();
});

// Modules
// module__about-slider
(function() {

    // about slick slider
    var $aboutSlider = $('.jsAboutSlider');
    var slideCount = null;

    $( document ).ready(function(){
        $aboutSlider.slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            //fade: true,
            nextArrow: '.slick-next-1',
            prevArrow: '.slick-prev-1'
        });
    });

    $aboutSlider.on('init', function(event, slick){
        slideCount = slick.slideCount;
        setSlideCount();
        setCurrentSlideNumber(slick.currentSlide);
    });
    
    $aboutSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        setCurrentSlideNumber(nextSlide);
    });
    
    function setSlideCount() {
        var $el = $('.slide-count-wrap').find('.total');
        $el.text(slideCount);
    }
    
    function setCurrentSlideNumber(currentSlide) {
        var $el = $('.slide-count-wrap').find('.current');
        $el.text(currentSlide + 1);
    }

})();

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

// module__career
(function() {

    $('.jsCareer').click(function(event) {
        $('.popup').addClass('jsVisible')
        $('body').addClass('jsOver')
    });

    $('.icon_close ').click(function(event) {
        $('.popup').removeClass('jsVisible')
        $('body').removeClass('jsOver')
    });

})();

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
        if ($(window).width() >= 768){
            $('.jsHeight2').css( 
                'height', $(window).height()
            );
        } else if ($(window).width() <= 768) {
            $('.jsHeight2').css('height', 'auto');
        } 
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

// module__top-slider
(function() {

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

})();

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

// side-nav
(function() {

    $('.jsSideNav').click(function(event) {
        $(this).toggleClass('active');
        $('.side-nav').toggleClass('active');
    });

})();

