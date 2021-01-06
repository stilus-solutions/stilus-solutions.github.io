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

})(jQuery);
