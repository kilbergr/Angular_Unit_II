var app = angular.module('mouseOverDirectiveApp', []);
app.controller('ChangeColorController', ['$scope', function($scope){
  $scope.background = 'blue';
  $scope.color = 'violet';
}])
app.directive('gsChangeBackground', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      var oldbgColor = element.css('background-color');
      var oldColor = element.css('color');
      
      element.on('mouseenter', function(event) {
        element.css('background-color', scope.background);
      });

       element.on('mouseenter', function(event) {
        element.css('color', scope.color);
      });

      element.on('mouseleave', function(event) {
        element.css('background-color', oldbgColor);
      })

			 element.on('mouseleave', function(event) {
        element.css('color', oldColor);
      })

    },
    scope: {
      color: '=',
      background: '='
    }
  };
});