app.controller('portafolioIndexAdminCtrl', function ($scope, $firebaseArray){
	var ref = new Firebase('https://cnwebs.firebaseio.com/portafolios');
    $scope.portafolios = $firebaseArray(ref);

    $scope.eliminar = function (portafolio) {
    	$scope.portafolios.$remove(portafolio);
    };
});

app.controller('portafolioNuevoAdminCtrl', function ($scope, $firebaseArray, $location){
	var ref = new Firebase('https://cnwebs.firebaseio.com/portafolios');
    $scope.portafolios = $firebaseArray(ref);
    $scope.nuevo = function(portafolio){
    	$scope.portafolios.$add(portafolio);
    	$location.path('/portafolio_admin');
    };
});

app.controller('portafolioVerAdminCtrl', function ($scope, $firebaseObject, $stateParams){
	var ref = new Firebase("https://cnwebs.firebaseio.com/portafolios");	
	$scope.portafolio = $firebaseObject(ref.child($stateParams.id));
});

app.controller('portafolioEditarAdminCtrl', function ($scope, $firebaseObject, $stateParams, $location){
	var ref = new Firebase("https://cnwebs.firebaseio.com/portafolios");	
	$scope.portafolio = $firebaseObject(ref.child($stateParams.id));

	$scope.editar = function(portafolio){
		$scope.portafolio.$save(portafolio);
		$location.path('/portafolio_admin');
	};
});