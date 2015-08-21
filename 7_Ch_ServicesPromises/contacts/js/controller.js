app.controller('ContactController', ["$scope", "ContactList", "$route", "$routeParams", '$rootScope', function($scope, ContactList, $route, $routeParams, $rootScope){
   $scope.contactData = ContactList.contactList;
   $scope.addContact = ContactList.addContact;
   $scope.findContact = ContactList.findContact;
   $scope.foundContact = ContactList.foundContact;
   $scope.params = $routeParams;
}]);
	

