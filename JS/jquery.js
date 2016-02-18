$(document).ready(function() {
//alert("1");
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