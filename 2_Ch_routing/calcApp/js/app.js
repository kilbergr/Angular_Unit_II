var app = angular.module("calcApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/home.html'
		})
		.when('/add/:num1/:num2', {
			templateUrl: 'partials/add.html',
			controller: 'AddController'

		})
			.when('/subtract/:num1/:num2', {
			templateUrl: 'partials/subtract.html',
			controller: 'SubController'

		})
			.when('/multiply/:num1/:num2', {
			templateUrl: 'partials/multiply.html',
			controller: 'MultController'
		})
			.when('/divide/:num1/:num2', {
			templateUrl: 'partials/divide.html',
			controller: 'DivController'
		})
		.otherwise({
			redirectTo: '/'
		});
	 $locationProvider.html5Mode(true);
});