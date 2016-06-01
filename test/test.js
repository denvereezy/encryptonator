const assert = require('assert');
const encryptonator = require('../index');

describe("Testing encryptonator module", function() {
  const password = 123;

  it('should return a hash for any password inserted', function(done) {
    encryptonator.encryptPassword(password)
      .then(function(result) {
        assert(result);
        done();
      });
  });

  it('should compare hash to inserted password and return true', function(done) {
    encryptonator.encryptPassword(password)
      .then(function(hash) {
        return encryptonator.comparePassword(password, hash);
      })
      .then(function(match){
        assert(match, 'true');
        done();
      })
  });
});

describe("Testing encryptonator module using callback function", function() {
  const password = 123;

  it('should return a hash', function(done) {
    encryptonator.encryptPassword(password, function(result) {
        assert(result);
        done();
      });
  });

  it('should compare hash to inserted password and return true', function(done) {
    encryptonator.encryptPassword(password, function(hash) {
        encryptonator.comparePassword(password, hash, function(match){
          assert(match, 'true');
          done();
        });
      });
  });
});
