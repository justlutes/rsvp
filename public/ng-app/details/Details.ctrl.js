angular
	.module('myApp')
	// .config(function(uiGmapGoogleMapApiProvider) {
	// 	uiGmapGoogleMapApiProvider.configure({
	// 		key: 'AIzaSyAOfqSJk-6IGdJ2xvrcwwHF0zFQpbK_jdg',
	// 		v: '3.20',
	// 		libraries: ''
	// 	});
	// })
	.controller('DetailsCtrl', [
		'$scope',
		function($scope, uiGmapGoogleMapApi) {
			$scope.map = {
				center: {
					latitude: 28.7079964,
					longitude: -81.2679684
				},
				zoom: 12 
			};
			$scope.marker = {
				id: 1,
				coords: {
					latitude: 28.7079964,
					longitude: -81.2679684
				},
				options: { draggable: false },
			};
		}
	]);