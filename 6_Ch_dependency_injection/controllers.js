app.controller('MathController', function($scope, $routeParams){
  $scope.val1 = parseInt($routeParams.val1, 10);
  $scope.val2 = parseInt($routeParams.val2, 10);
  $scope.op = "";
  $scope.result = 0;
  if ($routeParams.op === "add") {
    $scope.op = "+";
    $scope.result = $scope.val1 + $scope.val2;
  } else if ($routeParams.op === "subtract") {
    $scope.op = "-";
    $scope.result = $scope.val1 - $scope.val2;
  }
});


