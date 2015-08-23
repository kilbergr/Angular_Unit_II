app.controller('TeaController', ["$scope", "$route", "TeaList", "$rootScope", function($scope, $route, TeaList, $rootScope){
	 $scope.categories = ["dark", "cold", "awesome", "dry", "hot", "summer", "lucid","warm", "winter", "spring"];
	 $scope.quantity = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	 $scope.teaList = TeaList.teaList;
	 $scope.findTea = TeaList.findTea;
	 $scope.chosenTea = TeaList.teaList.chosenTea;
	 $scope.addTea = TeaList.addTea;
	 $scope.desiredTea = TeaList.desiredTea;
	 $scope.removeTea = TeaList.removeTea;
	 $scope.updateQuantity = TeaList.updateQuantity;


}])

app.controller('NavController', ["$scope", "$rootScope", function($scope, $rootScope){
	$scope.name = 'NavController'
}])
