(function ($, window, document, undefined) {

 'use strict';

$('.toggle').on('click', function() {
	$('.menu').toggleClass('expanded');
	$('.menu > span').toggleClass('hidden');
	$('.container__mobile_nav, .toggle').toggleClass('close');
});

})(jQuery, window, document);