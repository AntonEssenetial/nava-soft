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
