app.controller('TeaController', ["$scope", "$route", "TeaList", function($scope, $route, TeaList){
	 $scope.options = ["dark", "cold", "awesome", "dry", "hot", "summer", "lucid","warm", "winter", "spring"];
	 $scope.teaList = TeaList.teaList;
}])

app.controller('NavController', ["$scope", "$rootScope", function($scope, $rootScope){
	$scope.name = 'NavController'
}])