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
