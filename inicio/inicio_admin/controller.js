app.controller('inicioIndexAdminCtrl', function($scope, $firebaseObject){
	var ref = new Firebase('https://cnwebs.firebaseio.com/inicio')
	$scope.inicio = $firebaseObject(ref);
});

app.controller('inicioEditarAdminCtrl', function($scope, $firebaseObject, $location){
	var ref = new Firebase('https://cnwebs.firebaseio.com/inicio')
	$scope.inicio = $firebaseObject(ref);

	$scope.editar = function(inicio){
		$scope.inicio.$save(inicio);
		$location.path('/inicio_admin')
	};
});