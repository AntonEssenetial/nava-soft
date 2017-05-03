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
