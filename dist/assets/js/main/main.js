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
// header
(function() {

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = 10;
    
    $(window).scroll(hasScrolled);
    
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    
    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('header').removeClass('trDown').addClass('trUp');

        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('trUp').addClass('trDown');

            }
        }
        
        lastScrollTop = st;
    }

// function stickyFunc() {
//     if($(window).width() > 660){
//         $('.side-nav').sticky({
//             topSpacing:0
//         });
//     } else {
//         $('.side-nav').unstick();
//     }
// }
//$(window).on('load resize', stickyFunc)

})();

// module__about-facts
(function() {

    $(window).scroll(startCounter);
    function startCounter() {
        if ($(window).scrollTop() > 2000) {
            $(window).off("scroll", startCounter);
            $('.jsNum p').each(function () {
                var $this = $(this);
                jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                    duration: 5000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
        }
    }

})();

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

// module__blog_content
(function() {


    $(document).ready(function(){

        heightDetect3();
        var $grid = $('#container').isotope({
            itemSelector: '.shuffle__item',
            layoutMode: 'packery',
            cellsByRow: {
                columnWidth: 200,
                rowHeight: 150
            },
            masonry: {
                columnWidth: '.my-sizer-element'
            }
        })

        // filter functions
        var filterFns = {
            // show if number is greater than 50
            numberGreaterThan50: function() {
                var number = $(this).find('.number').text();
                return parseInt( number, 10 ) > 50;
            },
            // show if name ends with -ium
            ium: function() {
                var name = $(this).find('.name').text();
                return name.match( /ium$/ );
            }
        };
        // bind filter button click
        $('.filter-options').on( 'click', '.side-nav__link', function() {
            var filterValue = $( this ).attr('data-filter');
            // use filterFn if matches value
            filterValue = filterFns[ filterValue ] || filterValue;
            $grid.isotope({ filter: filterValue });
        });
        // change is-checked class on buttons
        $('.filter-options').each( function( i, buttonGroup ) {
            var $buttonGroup = $( buttonGroup );
            $buttonGroup.on( 'click', '.side-nav__link', function() {
                $buttonGroup.find('.active').removeClass('active');
                $( this ).addClass('active');
            });
        });

        $grid.imagesLoaded().progress( function() {
            $grid.isotope('layout');
        });  

        
        $(window).load(function(){
            $grid.isotope('layout');
        });


        $(window).on('load', heightDetect3);
        $(window).on('resize', heightDetect4);
    
    
        // height detect function
        function heightDetect3(){
            
            var img = $('.jsImgHeight').height()
            if ($(window).width() >= 1100) {
                $('.module__blog__twitter, .jsDiv').css( 
                    'height', img
                );
            } else {
                $('.module__blog__twitter, .jsDiv').css( 
                    'height', 'auto'
                );
            }
        };


        // height detect function
        function heightDetect4() {
            
            var div = $('.jsDivHeight').height()
    
            if ($(window).width() >= 1100) {
                $('.module__blog__twitter, .jsDiv').css( 
                    'height', div
                )
            } else {
                $('.module__blog__twitter, .jsDiv').css( 
                    'height', 'auto'
                );
            }
        }


    }); 

})();

// module__career
(function() {

    $('.jsCareer').click(function(event) {
        $('.popup').addClass('jsVisible')
        $('body').addClass('jsOver')
    });

    $('.popup__close').click(function(event) {
        $('.popup').removeClass('jsVisible')
        $('body').removeClass('jsOver')
    });

})();

// module__contact
(function() {

    $('.data-name').click(function(event) {
        $('.data-name').removeClass('active')
        $(this).addClass('active')
    });
    $('input,textarea').focus(function(){
       $(this).data('placeholder',$(this).attr('placeholder'))
        .attr('placeholder','');
    }).blur(function(){
        $(this).attr('placeholder',$(this).data('placeholder'));
    });

})();

// module__grid
(function() {





    $('.side-nav__link').click(function(event) {
        $('.jsGrid').addClass('custom');
    });


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
          $element.addClass('custom');
        } else {
          $element.removeClass('custom');
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

    $(document).ready(function() {
        heightDetect();
    });
    
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

// page__career
(function() {

    $('.pop').mCustomScrollbar({
        scrollInertia:100
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

