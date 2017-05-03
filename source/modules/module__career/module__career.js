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
