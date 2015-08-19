app.controller('httpController', function($scope, $http){

	$http.jsonp('https://itunes.apple.com/search?callback=JSON_CALLBACK&term=jack+johenson')
	.success(function(data){
    $scope.results = data.data.results;
 	})
 	.error(function(data){
 		$scope.error = "Uh-oh--there was an error!"
 	});



});