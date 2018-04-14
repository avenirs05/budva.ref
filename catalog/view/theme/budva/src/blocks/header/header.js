jQuery(function() {

		$('.menu__link').click(function(e) {
				var thisText = $(this).text().trim();
				$(this).addClass('menu__link_pressed');
			
				$('.menu__link').each(function(indx, el) { 
						if ( thisText == $(el).text().trim() ) {
									$(el).addClass('menu__link_pressed');
						} else {
									$(el).removeClass('menu__link_pressed');
						}
				})
		})

});