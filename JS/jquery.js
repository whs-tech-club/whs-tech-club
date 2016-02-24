$(document).ready(function() {
    var width = $(window).width();
    resize();
    $(window).resize(function(){
       resize();
    });
    
    function resize() {
        if($(this).width() != width){
           width = $(this).width();
           if(width < 540) {
               //alert(width);
               //$("a").hide();
           }
           /*else if(width > 540) {
               //alert(width);
               $("li").show();
           }*/
       }
    }
    
    jQuery("#heading").fitText(1.5, { minFontSize: '30px', maxFontSize: '60px' });

    var stickyNavTop = $('.nav').offset().top;

    var stickyNav = function(){
        //alert("2");
        var scrollTop = $(window).scrollTop();
      
        if (scrollTop > stickyNavTop) { 
            $('ul.nav').addClass('sticky');
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