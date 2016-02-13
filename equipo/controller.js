app.controller('equipoCtrl', function ($scope, $firebaseArray, $firebaseObject){
	var ref = new Firebase('https://cnwebs.firebaseio.com/equipos');
    $scope.equipos = $firebaseArray(ref);

    var ref_inicio = new Firebase('https://cnwebs.firebaseio.com/inicio');
    $scope.inicio = $firebaseObject(ref_inicio);
});

app.controller('equipoVerCtrl', function ($scope, $firebaseObject, $stateParams){
	$scope.id = $stateParams.id;
	var ref = new Firebase("https://cnwebs.firebaseio.com/equipos");
	$scope.equipo = $firebaseObject(ref.child($scope.id));
});

app.controller('quienesSomosIndexCtrl', function($scope, $firebaseObject){
	ref_inicio = new Firebase('https://cnwebs.firebaseio.com/inicio');
	$scope.inicio = $firebaseObject(ref_inicio);
});