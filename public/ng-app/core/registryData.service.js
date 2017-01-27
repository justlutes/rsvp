/***
 * getData service
 *
 * Access the local data JSON to retrieve registry data
 */

angular
	.module('myApp')
	.service('registryData', [
		'$http',
		function($http) {

			// build items and add them to the data
			function getRegistryItems(response) {
				var data = response.data;
				return data;
			}

			// error getting data
			function error() {
				console.log('There was an error getting registry data.');
			}

			// returns {promise}
			this.get = function() {
				return $http
					.get('/ng-app/data/registry.data.json')
					.then(getRegistryItems, error);
			};
		}
	]);