var app = angular.module("queryCalcApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'index.html'
	})

	.when('/add', {
		templateUrl: 'partials/add.html',
		controller: 'AddController'
	})

	.when('/subtract', {
		templateUrl: 'partials/sub.html',
		controller: 'SubController'
	})

	.when('/divide', {
		templateUrl: 'partials/div.html',
		controller: 'DivController'
	})

	.when('/multiply', {
		templateUrl: 'partials/mult.html',
		controller: 'MultController'
	})
	.otherwise({
				redirectTo: '/'
	});
	// $locationProvider.html5Mode(true);
})
// http://localhost:8000/#/add?x=4&y=10