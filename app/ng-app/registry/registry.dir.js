angular
    .module('myApp')
    .directive('registryForm', ['$http',
    function($http) {

        function registryCtrl($scope) {
				$scope.payment = {};
				//$scope.guest.guests = 1; // default number of guests to 1
			}
            
        function registryLink($scope, $elem, $attrs) {
            // form submit with process.php
				$scope.processForm = function() {
					$http({
						method : 'POST',
						url    : './charge.php',
						data   : $.param($scope.payment),
						headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
					})
					.success(function(data) {
						$scope.showForm = false;
						console.log(data);
					});
				};
        }
        	return {
				restrict: 'EA',
				scope: {
					item: '=',
					showForm: '='
				},
				templateUrl: 'ng-app/registry/payment.tpl.html',
				controller: registryCtrl,
				link: registryLink
			};
    }]);