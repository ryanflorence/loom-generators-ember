var generator = require('../../loom/generators/helper');

describe('helper generator', function() {
  describe('present', function() {
    it('sets resource name to camelCase', function() {
      generator.present('foo-bar').helperName.should.equal('fooBar');
    });
  });
});

