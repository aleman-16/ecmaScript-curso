function newUser(name, age, country) {
  var name = name || 'Def Name';
  var age = age || 0;
  var country = country || ' Def country';
  console.log(name, age, country);
}

newUser();
newUser('Manuel',31,'MX');

function newAdmin(name = 'DefAdm', age=0, country='DefCountry'){
  console.log(name,age,country);
}

newAdmin();
newAdmin('Manuel',31,'MX');