app.controller('ChatController', function($scope, $http){
	
	
	$scope.setMessage = function(){
		$scope.newMessage = {
			name: "",
			content: ""
		};
	}

	$scope.setMessage();

	$scope.addMessage = function(){
		if ($scope.newMessage.name && $scope.newMessage.content){
			$http.post('http://shielded-peak-6345.herokuapp.com/', $scope.newMessage)
			.then(function(data){
				$scope.data = data
			})
			$scope.getMessages();
		}
		$scope.setMessage();
	}

$scope.getMessages = function(){
	$http.get('http://shielded-peak-6345.herokuapp.com/')
	.then(function(data){
		$scope.messages = data.data
		})
	}


})