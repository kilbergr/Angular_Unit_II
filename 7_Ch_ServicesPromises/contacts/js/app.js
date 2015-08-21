var app = angular.module("contactsApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html',
		controller: 'ContactController'
	})
	.when('/show/:name', {
		templateUrl: 'partials/show.html',
		controller: 'ContactController'
	})
	.otherwise({
		redirectTo: '/'
	});
	$locationProvider.html5Mode(true);

});

	// $scope.contact = {
	// 	name: 'Rebecca', email: 'blah@blah.com', phone: '917-414-4141'
	// },
	// $scope.newContact = {};

	// $scope.submit = function(){
	// 	if ($scope.contact.name){
	// 		// if($scope.newContact.email){
	// 			// if ($scope.newContact.phone){
	// 				$scope.contact.push(this.name);
 //        	$scope.contact.name = '';
 //        	// $scope.contact.email = '';
 //        	// $scope.contact.phone = '';
	// 			// }
	// 		// }
	// 	}
