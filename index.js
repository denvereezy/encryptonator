const Promise = require('bluebird');
const bcrypt = require('bcrypt');

exports.encrypt = function() {
    const callback = arguments[1];
    const argumentToEncrypt = arguments[0].toString();
    switch (arguments.length) {
        case 1:
            return new Promise(function(resolve, reject) {
                bcrypt.genSalt(10, function(err, salt) {
                    bcrypt.hash(argumentToEncrypt, salt, function(err, hash) {
                        if (err) {
                            return reject(err);
                        }
                        resolve(hash)
                    });
                });
            });
            break;
        case 2:
            bcrypt.genSalt(10, function(err, salt) {
                bcrypt.hash(argumentToEncrypt, salt, function(err, hash) {
                    if (err) {
                        return err;
                    };
                    callback(hash);
                });
            });
            break;
    };
};

exports.compare = function() {
    const callback = arguments[2];
    const argumentToCompare = arguments[0].toString();
    const hash = arguments[1];
    switch (arguments.length) {
        case 2:
            return new Promise(function(resolve, reject) {
                bcrypt.compare(argumentToCompare, hash, function(err, pass) {
                    if (err) {
                        return reject(err);
                    }
                    resolve(pass)
                });
            });
            break;
        case 3:
            bcrypt.compare(argumentToCompare, hash, function(err, pass) {
                if (err) {
                    return reject(err);
                }
                callback(pass);
            });
            break;
    };
};
