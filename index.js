const encrypt = require('./encryptonator');

function myFunction(password) {

  encrypt.encryptPassword(password)
    .then(function(hash) {
      return encrypt.comparePassword(password, hash);
    })
    .then(function(match) {
      console.log(match);
    })
    .catch(function(err) {
      next(err);
    })
};
myFunction(123);
