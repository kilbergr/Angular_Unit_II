var app = angular.module('mouseOverDirectiveApp', []);

app.directive('gsChangeBackground', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {

      var oldbgColor = element.css('background-color');
      var oldColor = element.css('color');
      var currentbgColor = element.attr('currentbg-color');
      var currentColor = element.attr('current-color');

      element.on('mouseenter', function(event) {
        element.css('background-color', currentbgColor);
      });

       element.on('mouseenter', function(event) {
        element.css('color', currentColor);
      });

      element.on('mouseleave', function(event) {
        element.css('background-color', oldbgColor);
      })

			 element.on('mouseleave', function(event) {
        element.css('color', oldColor);
      })

    }
  };
});