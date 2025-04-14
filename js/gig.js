$(document).ready(function(){
    
    //navbar-fixed-scroll
    jQuery(window).scroll(function(){
        if (($(window).scrollTop() >= 100) & ($(window).width() > 992)){
            $('.navbar').addClass("fixed-top");
            $('.navbar').addClass("fixed-nav");
            $('.nav-drp-menu').css("right" , "0");
        }else {
            $('.navbar').removeClass("fixed-top");
            $('.navbar').removeClass("fixed-nav");
            $('.nav-drp-menu').css("right" , "-114px");
        }
    });
      

    //navbar-fixed for mobail 
    var previousScroll = 0; // موقعیت اسکرول قبلی  
    var navbar = $('.navbar');   
    
    $(window).scroll(function() {  
        if($(window).width() < 992){
            var currentScroll = $(this).scrollTop(); // موقعیت اسکرول فعلی  

            if (currentScroll > previousScroll) {  
                // اسکرول به سمت پایین  
                navbar.removeClass("fixed-top"); // پنهان کردن نوبار 
                navbar.removeClass("fixed-nav"); 
            } else {  
                // اسکرول به سمت بالا  
                navbar.addClass("fixed-top");   
                navbar.addClass("fixed-nav"); 
                $('.navbar-toggler-icon').css("margin-right" , "2rem"); 
                $('.search-icon-mobail').css("margin-left" , "2rem"); 
            }  
            previousScroll = currentScroll; 
        }
    });  

    //category
    $('.btn-category').click(function() {  
        var $box = $('.category-box');  
        $box.toggleClass('show'); // Toggle visibility of the menu 
        $('.icon-close-cat').toggleClass('show');
        $('.icon-cat').toggleClass('d-none');
        $('.btn-category').toggleClass('text-danger');
    });

    // Berger menu  
    const $button = $('.navbar-toggler');  
    const $navOverlay = $('.nav-overlay');  
    const $navbarCollapse = $('.navbar-collapse');  

    $button.on('click', function () {  
        $navOverlay.toggleClass('active');  
    });  

    $navOverlay.on('click', function (event) {  
        if (event.target === this) { 
            $navOverlay.removeClass('active');  
            $navbarCollapse.removeClass('show');  
        }  
    });

    
    // search box button
    $(".btn-icon-se").click(function(){
        $(".btn-icon-se").hide();
        $(".btn-icon-cl").show();
        $(".search-box").show();
        $(".btn-cl-input").show();
    });
    $(".btn-icon-cl").click(function(){
        $(".btn-icon-cl").hide();
        $(".btn-icon-se").show();
        $(".search-box").hide();
    });

    // search box button for mobail
    $(".btn-icon-se-mobail").click(function(){
        $(".btn-icon-se").hide();
        $(".btn-icon-cl").show();
        $(".search-box-mobail").show();
        $(".btn-cl-input").show();
        $(".overlay-se-box").show();

    });
    $(".btn-icon-cl").click(function(){
        $(".btn-icon-cl").hide();
        $(".btn-icon-se").show();
        $(".search-box-mobail").hide();
        $(".overlay-se-box").hide();


    });


    //accordion
    $('.icon-add').click(function() {  
        var $menu = $(this).next('.accordion-menu');  
        $menu.toggleClass('show'); // Toggle visibility of the menu  
        $(this).text($menu.is(':visible') ? '-' : '+'); // Change button text  
    });

    // darck button
    $('#chk').change(function () {  
        if ($(this).is(':checked')) {  
            $('body').addClass('bg-dark text-white'); 
            $('#navbarNav').removeClass('navbar-light bg-white').addClass('navbar-dark bg-dark');  
            $('.navbar-toggler').removeClass('navbar-light bg-white').addClass('navbar-dark bg-dark');  
        } else {  
            $('body').removeClass('bg-dark text-white');
            $('#navbarNav').removeClass('navbar-dark bg-dark').addClass('navbar-light bg-light');
            $('.navbar-toggler').removeClass('navbar-dark bg-dark').addClass('navbar-white bg-light');  
        }  
    }); 
    
    if($(window).width() < 400) {
        //m1
        $('.right').click(function () {
            $('.m1-slides').animate( { scrollLeft: '+=168' }, 286)
        });
        $('.left').click(function () {
            $('.m1-slides').animate( { scrollLeft: '-=168' }, 286)
        });
        
        //m2
        $('.right2').click(function () {
            $('.m2-slides').animate( { scrollLeft: '+=268' }, 286)
        });
        $('.left2').click(function () {
            $('.m2-slides').animate( { scrollLeft: '-=268' }, 286)
        });
        
        //m3
        $('.right3').click(function () {
            $('.m3-slides').animate( { scrollLeft: '+=268' }, 286)
        });
        $('.left3').click(function () {
            $('.m3-slides').animate( { scrollLeft: '-=268' }, 286)
        });
    }


    if(($(window).width() < 500) && ($(window).width() > 400)){
        //m1
        $('.right').click(function () {
            $('.m1-slides').animate( { scrollLeft: '+=224' }, 286)
        });
        $('.left').click(function () {
            $('.m1-slides').animate( { scrollLeft: '-=224' }, 286)
        });
        
        //m2
        $('.right2').click(function () {
            $('.m2-slides').animate( { scrollLeft: '+=224' }, 286)
        });
        $('.left2').click(function () {
            $('.m2-slides').animate( { scrollLeft: '-=224' }, 286)
        });
        
        //m3
        $('.right3').click(function () {
            $('.m3-slides').animate( { scrollLeft: '+=224' }, 286)
        });
        $('.left3').click(function () {
            $('.m3-slides').animate( { scrollLeft: '-=224' }, 286)
        });
    }

    if(($(window).width() < 576) && ($(window).width() > 500)){
        //m1
        $('.right').click(function () {
            $('.m1-slides').animate( { scrollLeft: '+=260' }, 286)
        });
        $('.left').click(function () {
            $('.m1-slides').animate( { scrollLeft: '-=260' }, 286)
        });
        
        //m2
        $('.right2').click(function () {
            $('.m2-slides').animate( { scrollLeft: '+=260' }, 286)
        });
        $('.left2').click(function () {
            $('.m2-slides').animate( { scrollLeft: '-=260' }, 286)
        });
        
        //m3
        $('.right3').click(function () {
            $('.m3-slides').animate( { scrollLeft: '+=260' }, 286)
        });
        $('.left3').click(function () {
            $('.m3-slides').animate( { scrollLeft: '-=260' }, 286)
        });
    }
    if(($(window).width() < 767) && ($(window).width() > 576)){
        console.log($(window).width())
        //m1
        $('.right').click(function () {
            $('.m1-slides').animate( { scrollLeft: '+=255' }, 286);
        });
        $('.left').click(function () {
            $('.m1-slides').animate( { scrollLeft: '-=255' }, 286)
        });
        
        //m2
        $('.right2').click(function () {
            $('.m2-slides').animate( { scrollLeft: '+=255' }, 286)
        });
        $('.left2').click(function () {
            $('.m2-slides').animate( { scrollLeft: '-=255' }, 286)
        });
        
        //m3
        $('.right3').click(function () {
            $('.m3-slides').animate( { scrollLeft: '+=255' }, 286)
        });
        $('.left3').click(function () {
            $('.m3-slides').animate( { scrollLeft: '-=255' }, 286)
        });
            
    }
    if(($(window).width() < 992) && ($(window).width() > 767)){
        //m1
        $('.right').click(function () {
            $('.m1-slides').animate( { scrollLeft: '+=234' }, 286)
        });
        $('.left').click(function () {
            $('.m1-slides').animate( { scrollLeft: '-=234' }, 286)
        });
        
        //m2
        $('.right2').click(function () {
            $('.m2-slides').animate( { scrollLeft: '+=234' }, 286)
        });
        $('.left2').click(function () {
            $('.m2-slides').animate( { scrollLeft: '-=234' }, 286)
        });
        
        //m3
        $('.right3').click(function () {
            $('.m3-slides').animate( { scrollLeft: '+=234' }, 286)
        });
        $('.left3').click(function () {
            $('.m3-slides').animate( { scrollLeft: '-=234' }, 286)
        });
            
    }
    if(($(window).width() < 1200) && ($(window).width() > 992)){
        //m1
        $('.right').click(function () {
            $('.m1-slides').animate( { scrollLeft: '+=238' }, 286)
        });
        $('.left').click(function () {
            $('.m1-slides').animate( { scrollLeft: '-=238' }, 286)
        });
        
        //m2
        $('.right2').click(function () {
            $('.m2-slides').animate( { scrollLeft: '+=238' }, 286)
        });
        $('.left2').click(function () {
            $('.m2-slides').animate( { scrollLeft: '-=238' }, 286)
        });
        
        //m3
        $('.right3').click(function () {
            $('.m3-slides').animate( { scrollLeft: '+=238' }, 286)
        });
        $('.left3').click(function () {
            $('.m3-slides').animate( { scrollLeft: '-=238' }, 286)
        });
            
    }
    if($(window).width() > 1200){
        //m1
        $('.right').click(function () {
            $('.m1-slides').animate( { scrollLeft: '+=281' }, 286)
        });
        $('.left').click(function () {
            $('.m1-slides').animate( { scrollLeft: '-=281' }, 286)
            console.log($('.m1-slides').scrollLeft());  

        });
        
        //m2
        $('.right2').click(function () {
            $('.m2-slides').animate( { scrollLeft: '+=281' }, 286)
        });
        $('.left2').click(function () {
            $('.m2-slides').animate( { scrollLeft: '-=281' }, 286)
        });
        
        //m3
        $('.right3').click(function () {
            $('.m3-slides').animate( { scrollLeft: '+=281' }, 286)
        });
        $('.left3').click(function () {
            $('.m3-slides').animate( { scrollLeft: '-=281' }, 286)
        });
            
    }
      
    
    //footer carousel
    
    $('#carouselExampleIndicators').carousel({
        interval: 1500 
    })
    
 

    
});
