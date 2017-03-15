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
				zoom: 14
			};
			$scope.marker = {
				id: 1,
				url: 'https://www.google.com/maps?ll=28.708294,-81.266482&z=17&t=m&hl=en-US&gl=US&mapclient=apiv3&cid=18090035913837276952',
				coords: {
					latitude: 28.708327,
					longitude: -81.266342
				},
				options: { draggable: false,
							title: 'Luxmore Grande Estate' },
			    events: {
					click: function( marker, eventName, args) {
						window.open($scope.marker.url);
					}
				}
			};

			var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});


		}
	]);