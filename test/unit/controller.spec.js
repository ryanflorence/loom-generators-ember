var generator = require('../../loom/generators/controller');
var msg = require('loom/lib/message');
var sinon = require('sinon');

describe('controller generator', function() {

  describe('present', function() {
    it('prompts for controller type if not provided', function() {
      var env = { args: ['application'], name: 'controller' };
      var stub = sinon.stub(msg, 'prompt').returns('array');
      generator.present('application', {}, env).should.eql({
        objectName: 'ApplicationController',
        params: {},
        type: 'Array'
      });
      stub.restore();
    });

    it('uses controller type if provided', function() {
      var env = {
        args: ['application'],
        params: { type: 'array' },
        name: 'controller'
      };
      generator.present('application', {type: 'array'}, env).should.eql({
        objectName: 'ApplicationController',
        params: {type: 'array'},
        type: 'Array'
      });
    });
  });
});

