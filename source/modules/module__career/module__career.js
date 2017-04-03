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
