var generator = require('../../loom/generators/index');
var stubIndex = require('../helpers/stub_index');

describe('default generator', function() {
  describe('savePath', function() {
    it('saves to the right place', function() {
      generator.savePath().should.equal('app/index.js');
    });
  });

  describe('present', function() {
    it('returns all modules and helpers', function() {
      var stub = stubIndex();
      generator.present().should.eql({
        modules: [
          {name: 'ApplicationController', path: './controllers/application'},
          {name: 'FooBarBazQuxController', path: './controllers/foo/bar/baz-qux'}
        ],
        helpers: [{path: './helpers/capitalize'}]
      });
      stub.restore();
    });
  });

  describe('write', function() {});

});
