const assert = require('assert');
const encryptonator = require('../encryptonator');

describe("Testing my hash module", function() {
  it('should return a hash for any password inserted', function(done) {
    const password = 123;
    encryptonator.encryptPassword(password)
      .then(function(result) {
        console.log(result);
        assert(result);
        done();
      });
  });

  it('should compare hash to inserted password and return true', function(done) {
    const password = 123;
    encryptonator.encryptPassword(password)
      .then(function(hash) {
        return encryptonator.comparePassword(password, hash);
      })
      .then(function(match){
        console.log(match);
        assert(match, 'true');
        done();
      })
  });
});
