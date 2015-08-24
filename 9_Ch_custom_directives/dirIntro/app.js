var app = angular.module('simpleDirectiveApp', []);
app.controller('LogoController', ['$scope', function($scope) {
  $scope.logo = {img: "http://www.toysrus.com/graphics/tru_prod_images/Duncan-Metal-Drifter-Pro-Yo-Yo--pTRU1-8444206dt.jpg"
  };
}]);
app.directive('gsAngularLogo', function() {
  return {
  	templateUrl: 'gs-angular-logo.html'
  };
});