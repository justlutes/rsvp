/***
 * getData service
 *
 * Access the local data JSON to retrieve guest data
 */

angular
	.module('myApp')
	.service('guestData', [
		'$http',
		function($http) {

			// build items and add them to the data
			function getGuestItems(response) {
				var data = response.data;
				return data;
			}

			// error getting data
			function error() {
				console.log('There was an error getting guest data.');
			}

			// returns {promise}
			this.get = function() {
				return $http
					.get('/ng-app/data/guests.data.json')
					.then(getGuestItems, error);
			};
		}
	]);