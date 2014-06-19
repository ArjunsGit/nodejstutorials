var app_user = require("usermodule");
var user = app_user.appuser();
user.set_userdetails("a123","arjun","ar@gmail.com","admin");
var seconduser = app_user.appuser();
seconduser.set_userdetails("b123","adam","adam@gmail.com","user");
console.log(user.get_username());
console.log(seconduser.get_username());
