var app = angular.module('mouseOverDirectiveApp', [])

app.directive('gsChangeBackground', function() {
  return {
    restrict: 'E',
    link: function(scope, element, attrs) {

      var oldColor = element.css('background-color');

      element.on('mouseenter', function(event) {
        element.css('background-color', 'background');
      });

       element.on('mouseenter', function(event) {
        element.css('color', 'color');
      });

      // element.on('mouseleave', function(event) {
      //   element.css('background-color', oldColor);
      // })

      // element.on('click', function(event){
      //   element.css('background-color', 'green')
      // });
    }
  };
});