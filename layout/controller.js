app.controller('menuCtrl', function ($scope, $firebaseAuth, $location){
	// para hacer la comparacion en active
	

	var ref = new Firebase("https://cnwebs.firebaseio.com");
    $scope.authObj = $firebaseAuth(ref);    

    $scope.authObj.$onAuth(function(authData) {
  		if (authData) {  			
  			$scope.status = true;
  			$scope.authData = authData;  			
    		console.log("logeado con id:", authData.uid);
  		} else {
  			$scope.authData = authData;
  			$scope.status = false;
    		console.log("Logged out");
  		}
	});    

	$scope.unlogin = function (){
		$scope.authObj.$unauth();
		$location.path('/');
	}

});