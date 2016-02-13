app.controller('preciosIndexAdminCtrl', function ($scope, $firebaseArray){
	var ref = new Firebase('https://cnwebs.firebaseio.com/precios');
    $scope.precios = $firebaseArray(ref);
	
});

app.controller('preciosNuevoAdminCtrl', function ($scope, $firebaseArray, $location){
	var ref = new Firebase('https://cnwebs.firebaseio.com/precios');
    $scope.precios = $firebaseArray(ref);
    $scope.nuevo = function(precio){
    	$scope.precios.$add(precio);
    	$location.path('/precios_admin');
    };

});

app.controller('preciosVerAdminCtrl', function ($scope, $firebaseObject, $stateParams){		
	var ref = new Firebase("https://cnwebs.firebaseio.com/precios");	
	$scope.precio = $firebaseObject(ref.child($stateParams.id));
});

app.controller('preciosEditarAdminCtrl', function ($scope, $firebaseObject, $stateParams, $location){
	var ref = new Firebase("https://cnwebs.firebaseio.com/precios");	
	$scope.precio = $firebaseObject(ref.child($stateParams.id));

	$scope.editar = function(precio){
		$scope.precio.$save(precio);
		$location.path('/precios_admin');
	};
});