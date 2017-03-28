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
