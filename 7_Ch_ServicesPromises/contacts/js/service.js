app.factory('ContactList', function() {
  var ContactList = {};

  ContactList.contactList = [{name: 'Rebecca', email: 'blah@blah.com', phone: '917-414-4141'}];

  ContactList.addContact = function(contact) {
    ContactList.contactList.push({
      name: contact.name,
      email: contact.email,
      phone: contact.phone});
  };

  ContactList.findContact = function(name) {
     ContactList.contactList.foundContact = {};
      for(var i = 0; i<ContactList.contactList.length; i++){
        if(ContactList.contactList[i].name == name){
          ContactList.foundContact = ContactList.contactList[i];
          return ContactList.foundContact;
        }
      }
  };

  ContactList.removeContact = function(index) {
    ContactList.contactList.splice(index, 1);
  };

  return ContactList;
});

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