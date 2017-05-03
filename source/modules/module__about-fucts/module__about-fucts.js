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
