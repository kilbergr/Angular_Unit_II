var app = module.Angular("calcApp", ['ngRoute']);
app.config(function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/home.html'
		})
		.when('/add', {
			templateUrl: 'partials/add.html',
			controller: 'AddCtrl'

		})
			.when('/subtract', {
			templateUrl: 'partials/subtract.html',
			controller: 'SubtractCtrl'

		})
			.when('/multiply', {
			templateUrl: 'partials/multiply.html',
			controller: 'MultiplyCtrl'
		})
			.when('/divide', {
			templateUrl: 'partials/divide.html',
			controller: 'DivideCtrl'
		})
			.otherwise({
				redirectTo: '/'
			});
		$locationProvider.html5Mode(true)
});