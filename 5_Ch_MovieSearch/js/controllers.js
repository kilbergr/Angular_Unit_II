app.controller('MovieController', function($scope, $route, $routeParams, $http){
	$scope.params = $routeParams;
	$scope.inquiry = $routeParams.inquiry;
	


	$scope.searchResults = function(){
		$http.get('http://www.omdbapi.com/?s=' + $scope.inquiry)
		.then(function(data){
			$scope.results = data.data.Search
		});
	}

	$scope.showResult = function(id){
		$http.get('http://www.omdbapi.com/?i=' + id)
		.then(function(data){
			$scope.highlight = data
		})
			}


})