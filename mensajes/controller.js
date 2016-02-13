app.controller('mensajesCtrl', function ($scope, $firebaseArray, $firebaseAuth){

	// Direccion general de firebase
	var ref = new Firebase('https://cnwebs.firebaseio.com');

	// obteniendo datos de firebase
	$scope.authObj = $firebaseAuth(ref);
	var authData = $scope.authObj.$getAuth();

	// mensajes del usuario
	//var refMensajes = new Firebase('https://cnwebs.firebaseio.com/mensajes')	
    //var scrollRef = new Firebase.util.Scroll(refMensajes, 'number');
    //$scope.mensajes = $firebaseArray(scrollRef.orderByChild("user_id").equalTo(authData.uid));
    //$scope.mensajes.scroll = scrollRef.scroll;



	var refMensajes = new Firebase('https://cnwebs.firebaseio.com/mensajes');
	$scope.mensajes = $firebaseArray(refMensajes.orderByChild("user_id").equalTo(authData.uid));	

	// function enviar mensaje
	$scope.enviar = function(mensaje){
		$scope.mensaje.user_id = authData.uid;
		$scope.mensaje.created_at = Firebase.ServerValue.TIMESTAMP;		
		$scope.mensajes.$add(mensaje);
		$scope.mensaje = '';
	};

});