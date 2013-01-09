(function ($) {

	var $collapse = $('#collapse1');
	var $allPanels = $collapse.find('.collapse-panel');

	// Hide panels intially
	$allPanels.each(function() {
		$(this).find('.collapse-content').hide();
	})

	// Mark the first one as active and show it
	$collapse.find('.collapse-panel:first').addClass('active').find('.collapse-content').show();

	// Toggle on click
	$collapse.find('.collapse-title').click(function() {
		$allPanels.removeClass('active').find('.collapse-content').slideUp(200);
		$(this).parent().addClass('active').find('.collapse-content').slideDown(200);
		return false;
	});


})(jQuery);