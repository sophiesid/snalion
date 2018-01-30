//=require jquery.min.js

// to inlude bootstrap plugins add "=" sign below
//=require javascripts/bootstrap/transition.js
//=require javascripts/bootstrap/collapse.js
// require javascripts/bootstrap.min.js

//=require slick.min.js
//=require libs/isotope.pkgd.min.js
//require libs/masonry.pkgd.min.js
//require intro.js




;(function($){

	$(document).ready(function(){
		var $slider = $('.ba-slider');

		$slider.slick({
			dots: false,
			infinite: true,

			autoplay: true,
			autoplaySpeed: 2000,
			slide: '.ba-slide',
			prevArrow: '.ba-slider-prev',
			nextArrow: '.ba-slider-next'
		});

	});





	var worksGrid = $('.ba-portfolio__list');


	$(window).on('load', function(){
		worksGrid.isotope({
		  // options
		  itemSelector: '.ba-portfolio__item',
		  percentPosition: true,
		  // masonry:{
		  // 	columnWidth: '.ba-portfolio__item',
		  // }
		});


		// filter items on button click
		$('.ba-portfolio-filter').on( 'click', '[data-filter]', function(e) {
		 e.preventDefault();
		  var filterValue = $(this).data('filter');
		  worksGrid.isotope({ filter: filterValue });

		  $('.ba-active[data-filter]').removeClass('ba-active');
		  $(this).addClass('ba-active');

		});
	});


	// $('.ba-portfolio').masonry({
	//   // set itemSelector so .grid-sizer is not used in layout
	//   itemSelector: '.ba-portfolio__item',
	//   // use element for option
	//   columnWidth: '.grid-sizer',
	//   percentPosition: true
	// });

})(jQuery);






















