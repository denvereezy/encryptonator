const assert    = require('assert');
const encrypt   = require('../hash');

describe("Testing my hash module", function() {
  it('should return a hash for any password inserted', function(done) {
    const password = 123;
    encrypt.encryptPassword(password)
      .then(function(result) {
        console.log(result);
        assert(result);
        done();
      });
  });
});
