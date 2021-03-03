/* Description: Custom JS file
   Author: Camille Nicodemus, Stilus Solutions
  Adapted from Inovatik */

  (function($) {
      "use strict";

  	/* Preloader */
  	$(window).on('load', function() {
  		var preloaderFadeOutTime = 500;
  		function hidePreloader() {
  			var preloader = $('.spinner-wrapper');
  			setTimeout(function() {
  				preloader.fadeOut(preloaderFadeOutTime);
  			}, 500);
  		}
  		hidePreloader();
  	});

    // jQuery for page scrolling feature - requires jQuery Easing plugin
  	$(function() {
  		$(document).on('click', 'a.page-scroll', function(event) {
  			var $anchor = $(this);
  			$('html, body').stop().animate({
  				scrollTop: $($anchor.attr('href')).offset().top
  			}, 800, 'easeInOutExpo');
  			event.preventDefault();
  		});
  	});

    $(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".navbar-custom").addClass("navbar-custom-active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".navbar-custom").removeClass("navbar-custom-active");
        }
    });
});

    $(function() {
      const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        effect: 'coverflow',
        direction: 'horizontal',
        slidesPerView: 3,
        autoplay: {
          delay:1500,
        },
        coverflowEffect: {
          rotate:0,
          slideShadows: false,
        },
        loop: true,
        speed: 400,
        spaceBetween: 100,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
    });


})(jQuery);
