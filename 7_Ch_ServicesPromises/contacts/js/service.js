app.factory('ContactList', function() {
  var ContactList = {};
  var id = 2;
  ContactList.contactList = [{name: 'Rebecca', email: 'blah@blah.com', phone: '917-414-4141', id:1}];

  ContactList.addContact = function(contact) {
    ContactList.contactList.push({
      name: contact.name,
      email: contact.email,
      phone: contact.phone,
      id: id,
      gif: ''
    });
    id++;
  };

  ContactList.findContact = function(id) {
     ContactList.contactList.foundContact = {};
      for(var i = 0; i<ContactList.contactList.length; i++){
        if(ContactList.contactList[i].id == id){
          ContactList.foundContact = ContactList.contactList[i];
          return ContactList.foundContact;
        }
      }
  };
    

  ContactList.removeContact = function(id) {
    for(var i = 0; i<ContactList.contactList.length; i++){
        if(ContactList.contactList[i].id == id){
           ContactList.contactList.splice(i, 1);
           // console.log(ContactList.contactList)
         return ContactList.contactList;
       }
     }
  };
 return ContactList;
});

app.factory('Giphy', ['$http', '$q', '$rootScope', function($http, $q, $rootScope){
  var Giphy = {};
  Giphy.foundGif = [];
  var baseURL = 'http://api.giphy.com/v1/gifs/search?q=';
  var searchTerm = '';
  var apiKey = '&api_key=dc6zaTOxFJmzC';

  Giphy.setSearchTerm = function(term){
    searchTerm = encodeURIComponent(term);
  }

  Giphy.getSearchTerm = function(){
    return decodeURIComponent(searchTerm);
  }

  Giphy.search = function(term){
    if (term !== undefined){
      Giphy.setSearchTerm(term);
    }
    var url = baseURL + searchTerm + apiKey;
    var deferred = $q.defer();

    $http.get(url).success(function(data){
      $rootScope.foundGif = data.data[0].images;
      console.log($rootScope.foundGif);
      deferred.resolve(data);
      // debugger;
    }).error(function(){
      deferred.reject("Error!")
    });
    return deferred.promise;
  }

   Giphy.log = function(){
    console.log("angry");
  }
  return Giphy;

} ])


// ContactList.addContact = function(){
  //   $scope.newContacts.push({
  //     name: $scope.contact.name,
  //     email: $scope.contact.email,
  //     phone: $scope.contact.phone
  //   })
  //   $scope.contact.name = '';
  //   $scope.contact.email = '';
  //   $scope.contact.phone = '';
  //   console.log($scope.newContacts)
  // }