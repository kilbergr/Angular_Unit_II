var app = angular.module("teaApp", ['ngRoute'])
.run(function($rootScope){
	$rootScope.currentRoute = 'home';
});

app.config(function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html',
		controller: 'TeaController'
	})
	.when('/checkout', {
		templateUrl: 'partials/checkout.html',
		controller: 'CheckoutController'
	})
	.otherwise({
		redirectTo: '/'
	});
	$locationProvider.html5Mode(true);
})