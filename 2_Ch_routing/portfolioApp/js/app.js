var app = angular.module("portfolioApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html'
      })
      .when('/bio', {
        templateUrl: 'partials/bio.html'
      })
      .when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'ProjectsController'
      })
      .when('/resume', {
        templateUrl: 'partials/resume.html'
      })

      .otherwise({ 
      	redirectTo: '/' });

    $locationProvider.html5Mode(true)
});