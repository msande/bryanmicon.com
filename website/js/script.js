
$(function () {

	// close mobile menu on click
	$(document).on('click', '.navbar-collapse', function () {
		$(this).collapse('hide');
	});

	// populate current year in footer
    $('#current-year').text((new Date()).getFullYear());
});