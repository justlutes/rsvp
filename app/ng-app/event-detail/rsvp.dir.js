angular
	.module('myApp')
	.directive('rsvpForm', ['$http', 'guestData',
		function($http) {

			// rsvpForm controller function
			function rsvpCtrl($scope, guestData) {
				$scope.guest = {};
				$scope.guest.guests = 1; // default number of guests to 1

				// get guest data
				guestData.get().then(function(data) {
					$scope.guests = [];

					for ( var guestID in data ) {
						var thisGuest = data[guestID];

						if ( !thisGuest.rsvp ) {
							$scope.guests.push(thisGuest);
						}
					}
				});
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