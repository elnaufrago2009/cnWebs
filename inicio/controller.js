app.controller('inicioCtrl', function ($scope, $firebaseArray, $firebaseObject) {	
	ref = new Firebase('https://cnwebs.firebaseio.com/equipos');
	$scope.equipos = $firebaseArray(ref);

	ref_inicio = new Firebase('https://cnwebs.firebaseio.com/inicio')
	$scope.inicio = $firebaseObject(ref_inicio);

	ref_precios = new Firebase('https://cnwebs.firebaseio.com/precios');
	$scope.precios = $firebaseArray(ref_precios);

	ref_portafolios = new Firebase('https://cnwebs.firebaseio.com/portafolios');
	$scope.portafolios = $firebaseArray(ref_portafolios.limit(4));

	ref_blog = new Firebase('https://cnwebs.firebaseio.com/blogs');
	$scope.blogs = $firebaseArray(ref_blog.limit(2));
});