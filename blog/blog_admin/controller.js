app.controller('blogsIndexAdminCtrl', function ($scope, $firebaseArray){
	var ref = new Firebase('https://cnwebs.firebaseio.com/blogs');
    $scope.blogs = $firebaseArray(ref);

    $scope.eliminar = function (blog) {
    	$scope.blogs.$remove(blog);
    };
});

app.controller('blogsNuevoAdminCtrl', function ($scope, $firebaseArray, $location){
	var ref = new Firebase('https://cnwebs.firebaseio.com/blogs');
    $scope.blogs = $firebaseArray(ref);
    $scope.nuevo = function(blog){
    	$scope.blog.created_at = Firebase.ServerValue.TIMESTAMP;
    	$scope.blog.updated_at = Firebase.ServerValue.TIMESTAMP;
    	$scope.blogs.$add(blog);
    	$location.path('/blog_admin');
    };
});

app.controller('blogsVerAdminCtrl', function ($scope, $firebaseObject, $stateParams){
	var ref = new Firebase("https://cnwebs.firebaseio.com/blogs");	
	$scope.blog = $firebaseObject(ref.child($stateParams.id));
});

app.controller('blogsEditarAdminCtrl', function ($scope, $firebaseObject, $stateParams, $location){
	var ref = new Firebase("https://cnwebs.firebaseio.com/blogs");	
	$scope.blog = $firebaseObject(ref.child($stateParams.id));

	$scope.editar = function(blog){
		$scope.blog.updated_at = Firebase.ServerValue.TIMESTAMP;
		$scope.blog.$save(blog);
		$location.path('/blog_admin');
	};
});