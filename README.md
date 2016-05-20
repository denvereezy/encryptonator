# encryptonator

[![Build Status](https://travis-ci.org/denvereezy/encryptonator.svg?branch=master)](https://travis-ci.org/denvereezy/encryptonator)

This module was created to make the process of encrypting passwords more convenient.
Only supporting promises.

## How to install
  ` npm install encryptonator`


## Basic usage:

### To encrypt password

```javascript
var encryptonator = require('encryptonator');

function myFunction(password) {
//pass in password to encrypt
    encryptonator.encryptPassword(password)
        .then(function(hash) {
        //displaying the hash should look something like this:
        //$2a$10$xDEBpu7viRFvesDueQXdl.7OkAM87Wqb6HDjWy3uZEYEuhIbOzw9a
            console.log(hash);
        })
        .catch(function(err) {
            next(err);
        });
};
```

### To compare password with encrypted password

```javascript
function myFunction(hash) {
    var password = 'your password';
    encryptonator.comparePassword(password, hash)
        .then(function(match) {
            if (match) {
            //if match is true
                console.log('password is a match');
            } else {
                console.log('password is not a match');
            };
        })
        .catch(function(err) {
            next(err);
        });
};
```
