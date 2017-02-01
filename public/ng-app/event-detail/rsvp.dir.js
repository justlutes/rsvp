angular
	.module('myApp')
	.directive('rsvpForm', ['$http',
		function($http) {

			// rsvpForm controller function
			function rsvpCtrl($scope) {
				$scope.guest = {};
				$scope.guest.guests = 1; // default number of guests to 1
				// Array for checking guest names and plus ones
				$scope.guests = [
					{	name: "kate fletcher", 	plusone: "Jerrod Fletcher"},
					{	name: "test", 			plusone: "Test Plus"},
					{	name: "jeff sweatland", plusone: "Jodi Sweatland"},
					{	name: "karen acosta", 	plusone: "Ivan Acosta"},
				];
			}

			// rsvpForm link function
			function rsvpLink($scope, $elem, $attrs) {
				
				// form submit with process.php
				$scope.processForm = function() {
					$http({
						method : 'POST',
						url    : './process.php',
						data   : $.param($scope.guest),
						headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
					})
					.success(function(data) {
						$scope.showForm = false;
					});
				};

				// close the RSVP modal window
				$scope.closeModal = function() {
					$scope.showForm = false;
				};
			}

			return {
				restrict: 'EA',
				scope: {
					event: '=',
					showForm: '='
				},
				templateUrl: 'ng-app/event-detail/rsvp.tpl.html',
				controller: rsvpCtrl,
				link: rsvpLink
			};
		}
	]);