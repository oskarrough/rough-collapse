(function ($) {

	var $collapse = $('#collapse1');
	var $allPanels = $collapse.find('.collapse-panel');

	// Hide panels intially
	$allPanels.each(function() {
		$(this).find('.collapse-content').hide();
	})

	// Mark the first one as isActive and show it
	$collapse.find('.collapse-panel:first').addClass('isActive').find('.collapse-content').show();

	// Toggle on click
	$collapse.find('.collapse-title').click(function() {

		// Hide any open panels
		$allPanels.removeClass('isActive').find('.collapse-content').slideUp(200);

		// Mark the clicked one as active and show it
		$(this).parent().addClass('isActive').find('.collapse-content').slideDown(200);

		return false;
	});


})(jQuery);