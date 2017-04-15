angular
	.module('myApp')
	.controller('ProposalCtrl', [
		'$scope',
		function($scope) {
			$(function() {
			    $('#slides').slick({
			        dots: true,
	                infinite: true,
	                speed: 300,
	                centerMode: true,
	                centerPadding: '50px',
	                slidesToShow: 3,
	                responsive: [
	                    {
	                        breakpoint: 1024,
	                        settings: {
	                            arrows: true,
	                            centerMode: false,
	                            slidesToShow: 2
	                        }
	                    },
	                    {
	                        breakpoint: 768,
	                        settings: {
	                            arrows: false,
	                            centerMode: false,
	                            slidesToShow: 1
	                        }
	                    }
	                ]
	            });
			    $('#slides').show();
			});
		}
	]);