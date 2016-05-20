const encryptonator = require('./index');

function myFunction(password) {

  encryptonator.encryptPassword(password)
    .then(function(hash) {
console.log(hash);
      return encryptonator.comparePassword(password, hash);
    })
    .then(function(match) {
      console.log(match);
    })
    .catch(function(err) {
      next(err);
    })
};
myFunction('root123');
