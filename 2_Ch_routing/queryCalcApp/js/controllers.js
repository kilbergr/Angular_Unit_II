	
app.controller('AddController', function($scope, $routeParams, $location){	
	debugger;
	$scope.x = $location.search()['x'];
	$scope.y = $location.search()['y'];
	$scope.soln = parseInt($scope.x)+ parseInt($scope.y);
})

app.controller('SubController', function($scope, $routeParams, $location){
	$scope.x = $location.search()['x'];
	$scope.y = $location.search()['y'];
	$scope.soln = parseInt($scope.x)- parseInt($scope.y);
})
	
app.controller('DivController', function($scope, $routeParams, $location){
	$scope.x = $location.search()['x'];
	$scope.y = $location.search()['y'];
	$scope.soln = parseInt($scope.x)/parseInt($scope.y);

})

app.controller('MultController', function($scope, $routeParams, $location){
	$scope.x = $location.search()['x'];
	$scope.y = $location.search()['y'];
	$scope.soln = parseInt($scope.x)*parseInt($scope.y);
})

