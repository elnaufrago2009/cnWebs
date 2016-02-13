app.controller('equipoIndexAdminCtrl', function ($scope, $firebaseArray){
    var ref = new Firebase('https://cnwebs.firebaseio.com/equipos');
    $scope.equipos = $firebaseArray(ref);

    $scope.eliminar = function (equipo) {
    	$scope.equipos.$remove(equipo);
    };
});

app.controller('equipoNuevoAdminCtrl', function ($scope, $firebaseArray, $location){	
    var ref = new Firebase('https://cnwebs.firebaseio.com/equipos');
    $scope.equipos = $firebaseArray(ref);
    $scope.guardar = function(equipo){
        $scope.equipos.$add(equipo);
        $scope.equipo = '';
        $location.path('/equipo_admin');
    };
});

app.controller('equipoVerAdminCtrl', function ($scope, $firebaseObject, $stateParams){
	$scope.id = $stateParams.id;	
	var ref = new Firebase("https://cnwebs.firebaseio.com/equipos");	
	$scope.equipo = $firebaseObject(ref.child($scope.id));
});

app.controller('equipoEditarAdminCtrl', function ($scope, $firebaseObject, $stateParams, $location){
	$scope.id = $stateParams.id;
	var ref = new Firebase("https://cnwebs.firebaseio.com/equipos");
	$scope.equipo = $firebaseObject(ref.child($scope.id));

	$scope.editar = function(equipo){
		$scope.equipo.$save(equipo);
		$location.path('/equipo_admin');
	}
});

app.controller('equipoEliminarAdminCtrl', function ($scope, $firebaseObject, $stateParams){
	$scope.id = $stateParams.id;
	var ref = new Firebase("https://cnwebs.firebaseio.com/equipos");
	$scope.equipo = $firebaseObject(ref.child($scope.id));


});


