# encryptonator

[![Build Status](https://travis-ci.org/denvereezy/encryptonator.svg?branch=master)](https://travis-ci.org/denvereezy/encryptonator)

This module was created to make the process of encrypting passwords more convenient.

## How to install
  ` npm install encryptonator`


## Basic usage with Promises:

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
## Basic usage with Callbacks:

### To encrypt password

```javascript
var encryptonator = require('encryptonator');

function myFunction(password) {
    //pass in password to encrypt
    encryptonator.encryptPassword(123, function(hash) {
        console.log(hash);
    });
};
```

### To compare password with encrypted password

```javascript
function myFunction() {
    var password = 'your password';
    var hash = '$2a$10$kAdeR.Z75jyJFVAy1f9/Gevmw3KbNSrQwQR/0pMPalmZE9Bzu7XAK';
    encryptonator.comparePassword(password, hash, function(match) {
        if (match) {
            //if match is true
            console.log('password is a match');
        } else {
            console.log('password is not a match');
        };
    });
};
```
