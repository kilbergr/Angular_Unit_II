app.controller("DogsController", function($scope){
	$scope.dogs = [
	{name: "Nino", breed:"Schnoodle", age: 10},
	{name: "Momo", breed: "American Eskimo", age: 1}
	]
})

app.controller("HomeController", function($scope){
	$scope.owners = [
	{name: "Rebecca", age: 26, hometown: "New York"},
	{name: "Rosa", age: 37, hometown: "San Francisco"}
	]
})