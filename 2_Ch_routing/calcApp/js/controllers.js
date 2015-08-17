app.controller('AddController', function($scope, $routeParams, $location){
	
	$scope.params = $routeParams;
	$scope.num1 = $routeParams.num1;
	$scope.num2 = $routeParams.num2;
	$scope.sol = parseInt($scope.num1)+parseInt($scope.num2);

})

app.controller('SubController', function($scope, $routeParams, $location){
	$scope.params = $routeParams;
	$scope.num1 = $routeParams.num1;
	$scope.num2 = $routeParams.num2;
	$scope.sol = parseInt($scope.num1)-parseInt($scope.num2);
})
	
app.controller('DivController', function($scope, $routeParams, $location){
	$scope.params = $routeParams;
	$scope.num1 = $routeParams.num1;
	$scope.num2 = $routeParams.num2;
	$scope.sol = parseInt($scope.num1)/parseInt($scope.num2);
	
})

app.controller('MultController', function($scope, $routeParams, $location){
	$scope.params = $routeParams;
	$scope.num1 = $routeParams.num1;
	$scope.num2 = $routeParams.num2;
	$scope.sol = parseInt($scope.num1)*parseInt($scope.num2);
})


	