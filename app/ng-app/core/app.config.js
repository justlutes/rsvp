/***
 * Routes
 *
 * Routing for our app
 * Enable HTML5 mode (to remove /# from URL)
 */

angular
	.module('myApp')
	.config(function($routeProvider, $locationProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'ng-app/home/Home.view.html',
					controller: 'HomeCtrl'
				})
				.when('/events', {
					templateUrl: 'ng-app/events/Events.view.html',
					controller: 'EventsCtrl'
				})
				.when('/proposal', {
					templateUrl: 'ng-app/proposal/Proposal.view.html',
					controller: 'ProposalCtrl'
				})
				.when('/details', {
					templateUrl: 'ng-app/details/Details.view.html',
					controller: 'DetailsCtrl'
				})
				.when('/registry', {
					templateUrl: 'ng-app/registry/Registry.view.html',
					controller: 'RegistryCtrl'
				})
				.when('/event/:eid', {
					templateUrl: 'ng-app/event-detail/EventDetail.view.html',
					controller: 'EventDetailCtrl'
				})
				.when('/404', {
					templateUrl: 'ng-app/404/404.view.html'
				})
				.otherwise({
					redirectTo: '/404'
				});

			$locationProvider
				.html5Mode({
					enabled: true
				})
				.hashPrefix('!');
		}
	);