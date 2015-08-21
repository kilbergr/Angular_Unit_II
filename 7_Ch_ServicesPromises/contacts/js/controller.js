app.controller('ContactController', ["$scope", "ContactList", "Giphy", "$route", "$routeParams", '$rootScope', '$http', '$q', function($scope, ContactList, Giphy, $route, $routeParams, $rootScope, $http, $q){
   $scope.contactData = ContactList.contactList;
   $scope.addContact = ContactList.addContact;
   $scope.findContact = ContactList.findContact;
   $scope.foundContact = ContactList.foundContact;
   $scope.removeContact = ContactList.removeContact;
   $scope.params = $routeParams;
   $scope.findGif = Giphy.search;
   $scope.foundGif = Giphy.foundGif;

}]);
	

