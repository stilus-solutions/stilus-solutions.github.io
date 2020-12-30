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

})(jQuery);
