$(function(){  
    
    
    var menuTop = $('.menu').offset().top;
    
    $(window).on('scroll',function(){
        var scroll_top = $(window).scrollTop();
        
        if(scroll_top > menuTop){
           $('.menu').addClass("menu_fix");
        }else{
               $('.menu').removeClass("menu_fix");
           }
        
       //botton js 
        
       if(scroll_top > 100){
           $(".backTop").fadeIn(1000);
       }else{
           $(".backTop").fadeOut(1000);
       }
        
        
        
    });
    
    //botton js
    
    $(".backTop").on('click',function(){
        $('html,body').animate({
            scrollTop:0
        },1000);
    });
    
    
    
    $('.banner_slider').slick({
        slidesToScroll:1,
        slidesToShow:1,
        arrows:true,
        dots:true,
        dotsClass:'slick_dots',
        nextArrow:'<i class="fas fa-arrow-left arrow_left"></i>',
        prevArrow:'<i class="fas fa-arrow-right arrow_right"></i>',
        
  });
    
    $('.counter').counterUp({
        delay: 10,
        time: 1000
});
    
  new WOW().init();  
    
    
    
    
    
   $('.filter-container').filterizr();
    
        $(".filter ul li").on("click", function(){
        
        $(".filter ul li").removeClass("active");
        
        $(this).addClass("active");
    });
        
    
    
});