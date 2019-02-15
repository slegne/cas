jQuery(document).ready(function( $ ) {

  "use strict";

/*-----------------------------------------------------------
 # Preloader
-----------------------------------------------------------*/
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });
    

/*-----------------------------------------------------------
 # Navigation
-----------------------------------------------------------*/
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

    $(window).scroll(function() {
      if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
          } else {
            $(".navbar-fixed-top").removeClass("top-nav-collapse");
          }
    });
    

/*-----------------------------------------------------------
 # Stellar Parallax Effect
-----------------------------------------------------------*/
    $.stellar({
      horizontalScrolling: false,
    }); 


/*-----------------------------------------------------------
 # Magnific Popup
-----------------------------------------------------------*/
    $('.image-popup').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        gallery:{
          enabled:true
        },
        zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });


/*-----------------------------------------------------------
 #  Smoothscroll
-----------------------------------------------------------*/
    $(function() {
      $('.custom-navbar a, #home a').on('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 49
          }, 1000);
            event.preventDefault();
      });
    });  

/*-----------------------------------------------------------
 #  Team Sliders
-----------------------------------------------------------*/
  $(document).ready(function() {
    $("#owl-speakers").owlCarousel({
      autoPlay: 6000,
      items : 4,
      itemsDesktop : [1199,2],
      itemsDesktopSmall : [979,1],
      itemsTablet: [768,1],
      itemsTabletSmall: [985,2],
      itemsMobile : [479,1],
    });
  });
/*-----------------------------------------------------------
 #  Sermons Video Sliders
-----------------------------------------------------------*/
   $(document).ready(function() {
    $("#preaching_sliders").owlCarousel({
      autoPlay: 6000,
      margin: 20,
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      itemsTablet: [768,2],
      itemsTabletSmall: [985,3],
      itemsMobile : [479,2],
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', 
    '<i class="fa fa-angle-right"></i>'],
    });
  });

/*-----------------------------------------------------------
 # Home Hero Sliders
-----------------------------------------------------------*/
    $('#heros').owlCarousel({
      animateOut: 'fadeOut',
      items:1,
      loop:true,
      autoplayHoverPause: false,
      autoplay: true,
      smartSpeed: 1000,
    })
/*-----------------------------------------------------------
 # Events Sliders
-----------------------------------------------------------*/
    $(document).ready(function() {
    $("#events").owlCarousel({
      autoPlay: 6000,
      margin: 20,
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      itemsTablet: [768,2],
      itemsTabletSmall: [985,3],
      itemsMobile : [479,2],
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', 
    '<i class="fa fa-angle-right"></i>'],
    });
  });
/*-----------------------------------------------------------
 # Works Sliders
-----------------------------------------------------------*/
    $('#works').owlCarousel({
      items:4,
      margin: 0,
      loop:true,
      autoplay:true,
      nav: true,
      navText: ['<i class="fa fa-angle-left"></i>', 
    '<i class="fa fa-angle-right"></i>'],
     dots:false
    })
/*-----------------------------------------------------------
 # Testimonials
-----------------------------------------------------------*/
 $('#testimonials').owlCarousel({
    loop: true,
    nav: false,
    items: 1,
    autoHeight:false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: ['<i class="fa fa-angle-left"></i>', 
    '<i class="fa fa-angle-right"></i>'],
    dots: true
  });

/*-----------------------------------------------------------
 # Back To Top
-----------------------------------------------------------*/
  
  $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      });
/*-----------------------------------------------------------
 # Venobox Popup JS
-----------------------------------------------------------*/
   $('.venobox').venobox({
          bgcolor: '',
          overlayColor: 'rgba(6, 12, 34, 0.85)',
          closeBackground: '',
          closeColor: '#fff'
     });
/*-----------------------------------------------------------
 # Nicescroll JS
-----------------------------------------------------------*/
   $("body").niceScroll({
    cursorcolor:"#000",
    cursorborder:"0px",
    cursorwidth :"8px",
    zindex:"9999"
  });
});
