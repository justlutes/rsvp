angular
	.module('myApp')
	.controller('RegistryCtrl', [
		'$scope',
		'registryData',
		function($scope, registryData) {
			
			// get registry data
			registryData.get().then(function(data) {
				$scope.items = [];

				for ( var itemID in data ) {
					var thisItem = data[itemID];

					if ( thisItem.available ) {
						$scope.items.push(thisItem);
					}
				}
			});

			var handler = StripeCheckout.configure({
				key: 'pk_test_sa0wFaYe9Qvra5z0uTIdHUKk',
				image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
				token: function(token) {
					var $input = $('<input type="hidden" name="stripeToken" />').val(token.id);
					$("form").append($input).submit();
				}
			});

			$("#customButton5").on('click', function(e) {
				var amount = $("#amountCustom").val() * 100;
				if (amount !== 0 ) {
					handler.open({
						name: 'Kyle & Chelsea',
						description: 'Test',
						amount: amount
					});
				}
				e.preventDefault();
			});

			$(window).on('popstate', function() {
				handler.close();
			});

			$scope.OpenHandler = function (amount, id) {
				var handler = StripeCheckout.configure({
				key: 'pk_test_sa0wFaYe9Qvra5z0uTIdHUKk',
				image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
				token: function(token) {
					var $input = $('<input type="hidden name=stripeToken />').val(token.id);
					$("form").append($input).submit();
				}
			});

				var $amount = amount * 100;
				if ($amount !== 0 ) {
					handler.open({
						name: 'Kyle & Chelsea',
						description: 'Test',
						amount: $amount
					});
				}

			$(window).on('popstate', function() {
				handler.close();
			});

			};

		}
	]);