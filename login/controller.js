app.controller('loginCtrl', function ($scope, $firebaseAuth, $location){

	$scope.registrar = function(){

	}


	var ref = new Firebase("https://cnwebs.firebaseio.com");
    $scope.authObj = $firebaseAuth(ref);

    $scope.login = function(){
    	$scope.authObj.$authWithPassword({
	  		email: $scope.email,
	  		password: $scope.password
		}).then(function(authData) {
	  		console.log("Logged in as:", authData.uid);
	  		$location.path('/mensajes')
		}).catch(function(error) {
	  		console.error("Authentication failed:", error);
		});
    }

});