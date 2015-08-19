var app = angular.module('movieApp', ['ngRoute']);

app.config(function($routeProvider, $httpProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/search.html',
		controller: 'MovieController'
	})
	.when('/show/:imdbid', {
		templateUrl: 'partials/show.html',
		controller: 'MovieController'
	})
	.otherwise({
		redirectTo: '/'
	});
	$locationProvider.html5Mode(true);

	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];

});