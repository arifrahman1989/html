$(function () {
    "use strict";

    
//    
//    var menuTop = $('.menu_part').offset().top;
//    
//    $(window).on('scroll', function)(){
//        
//        var scroll_top = $('window').scrollTop();
//        
//        if(scroll_top > menuTop){
//            $('.menu_part').addclass("menu_fix");
//        }else{
//            $('.menu_part').removeclass("menu_fix");
//        }
//    };
        
    
    
//    
//    $(".scrolling").on('click',function(){
//        $('html,body').animate({
//            scrollTop:0
//        },1000);
//        
//        
//        
//         if(scroll_top > 100){
//            $(".scrolling") .fadeIn(1000);               
//        }else{
//            $(".scrolling") .fadeOut(1000);  
//        }  
//    });
     

    $('#banner').slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: true,
        fade: true,
        dots: false,
        dotsClass: 'slick_dots',
        nextArrow: '<i class="fas fa-arrow-left arrow_left"></i>',
        prevArrow: '<i class="fas fa-arrow-right arrow_right"></i>',
        

    });
    
    
        

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
    
    
    
     new WOW().init();  

    
    
    
    
$('.team_member').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,   
    asNavFor:'.team_link',
    nextArrow: '<i class="fas fa-arrow-left arrow_left"></i>',
    prevArrow: '<i class="fas fa-arrow-right arrow_right"></i>',
    responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
    

    $('.team_link').slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false, 
        dotsClass: 'slick_dots',
        asNavFor:'.team_member',

    });
    
  
   
    $('.feedback_inner').slick();
    
    //Initialize filterizr with default options
	$('.filtr-container').filterizr();
    
//	var simplefilter = $('.simplefilter li');
//	simplefilter.on('click', function () {
//		simplefilter.removeClass('active');
//		$(this).addClass('active');
//	});
    
    
});
