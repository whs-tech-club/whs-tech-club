$(document).ready(function() {
    jQuery("#heading").fitText(1.5, { minFontSize: '30px', maxFontSize: '60px' });

    var stickyNavTop = $('.nav').offset().top;

    var stickyNav = function(){
        //alert("2");
        var scrollTop = $(window).scrollTop();
      
        if (scrollTop > stickyNavTop) { 
            $('.nav').addClass('sticky');
        }
        else {
            $('.nav').removeClass('sticky'); 
        }
    };

    stickyNav();
 
    $(window).scroll(function() {
        stickyNav();
    });
});