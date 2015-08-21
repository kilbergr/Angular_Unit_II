var app = angular.module("contactsApp", ['ngRoute']);

app.config(function($routeProvider,  $httpProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html',
		controller: 'ContactController'
	})
	.when('/show/:id', {
		templateUrl: 'partials/show.html',
		controller: 'ContactController'
	})
	.otherwise({
		redirectTo: '/'
	});
	$locationProvider.html5Mode(true);

	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];


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
