app.controller('MovieController', function($scope, $route, $routeParams, $http, $location, $rootScope){
	$scope.params = $routeParams;
	$scope.inquiry = $routeParams.inquiry;
	


	$scope.searchResults = function(){
		$http.get('http://www.omdbapi.com/?s=' + $scope.inquiry)
		.then(function(data){
			$rootScope.results = data.data.Search
		});
	}


	$scope.showResult = function(id){
		$http.get('http://www.omdbapi.com/?i=' + id)
		.then(function(data){
			console.log(data.data);
			// $location.path('/show/' + id);

			$rootScope.highlight = data.data;
	
		})
	}

	$scope.clearSearch = function(){
		$scope.params = $routeParams;
		$scope.inquiry = $routeParams.inquiry;
	}

})