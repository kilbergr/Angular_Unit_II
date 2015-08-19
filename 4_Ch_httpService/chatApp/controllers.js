
app.controller("ChatController", function($scope, $http){
              

$scope.setMessage = function(){
		$scope.newMessage = {
			name: "",
			content: ""
		}
	};
$scope.setMessage();	

$scope.getMessages = function(){
	$http.get('https://shielded-peak-6345.herokuapp.com/')
		.then(function(data){
			$scope.messages = data.data
			});
	}
	$scope.getMessages();
	        
$scope.addMessage = function(){
		if ($scope.newMessage.name && $scope.newMessage.content){
			$http.post('https://shielded-peak-6345.herokuapp.com/messages', $scope.newMessage)
			.then(function(data){
				$scope.data = data
			})
			$scope.getMessages();
		}
		$scope.setMessage();
	}

});
