app.controller('blogCtrl', function ($scope, $firebaseArray){
	ref_blog = new Firebase('https://cnwebs.firebaseio.com/blogs');	
    var scrollRef = new Firebase.util.Scroll(ref_blog, 'number');
    $scope.blogs = $firebaseArray(scrollRef);
    $scope.blogs.scroll = scrollRef.scroll;
});

app.controller('blogVerCtrl', function($scope, $firebaseObject, $stateParams){
	ref_blog = new Firebase('https://cnwebs.firebaseio.com/blogs');
	$scope.blog = $firebaseObject(ref_blog.child($stateParams.id));
});