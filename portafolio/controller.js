app.controller('portafolioCtrl', function ($scope, $firebaseArray){
	var ref_portafolio = new Firebase('https://cnwebs.firebaseio.com/portafolios');
	$scope.portafolios = $firebaseArray(ref_portafolio);
});

app.controller('portafolioVerCtrl', function($scope, $firebaseObject, $stateParams){
	var ref_portafolio = new Firebase('https://cnwebs.firebaseio.com/portafolios');
	$scope.portafolio = $firebaseObject(ref_portafolio.child($stateParams.id));
});