const Promise = require('bluebird');
const bcrypt = require('bcrypt');

exports.encryptPassword = function(password) {
  const passwordToEncrypt = password.toString();
  return new Promise(function(resolve, reject) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(passwordToEncrypt, salt, function(err, hash) {
        if (err) {
          return reject(err);
        }
        resolve(hash)
      });
    });
  });
};

exports.comparePassword = function(password, hash) {
  const passwordToCompare = password.toString();
  return new Promise(function(resolve, reject) {
    bcrypt.compare(passwordToCompare, hash, function(err, pass) {
      if (err) {
        return reject(err);
      }
      resolve(pass)
    });
  });
};
