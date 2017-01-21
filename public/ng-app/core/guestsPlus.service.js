/***
 * guestPlus Service
 *
 * Access the local data JSON to guests with plus one
 */

angular
	.module('myApp')
	.service('guestPlus', [
		'$http',
		function($http) {

			// error getting data
			function error() {
				console.log('There was an error getting guest data.');
			}

			// returns {promise}
			this.get = function() {
				return $http
					.get('/ng-app/data/guests.plus.json');
			};
		}
	]);