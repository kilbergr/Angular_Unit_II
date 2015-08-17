var app = angular.module("portfolioApp", ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html', 
        controller: 'HomeController',
        routeName: 'home'
      })
      .when('/bio', {
        templateUrl: 'partials/bio.html',
        controller: 'BioController',
        routeName: 'bio'
      })
      .when('/projects', {
        templateUrl: 'partials/projects.html',
        controller: 'ProjectsController',
        routeName: 'projects'
      })
      .when('/resume', {
        templateUrl: 'partials/resume.html',
        controller: 'ResumeController',
        routeName: 'resume'
      })

      .otherwise({ 
      	redirectTo: '/' });

    $locationProvider.html5Mode(true)
});