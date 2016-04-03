const encryptonator = require('./encryptonator');

function myFunction(password) {

  encryptonator.encryptPassword(password)
    .then(function(hash) {
      return encryptonator.comparePassword(password, hash);
    })
    .then(function(match) {
      console.log(match);
    })
    .catch(function(err) {
      next(err);
    })
};
myFunction(123);
