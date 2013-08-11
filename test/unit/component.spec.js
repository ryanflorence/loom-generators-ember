var generator = require('../../loom/generators/component');
var msg = require('loom/lib/message');
var sinon = require('sinon');

describe('component generator', function() {
  describe('before', function() {
    it('validates whether or not its a component', function() {
      var mock = sinon.mock(msg);
      mock.expects('error').once().withArgs("Components must have a '-' character");
      var env = { args: ['user'] };
      generator.before(env);
      mock.verify();
      mock.restore();
    });
  });

  describe('savePath', function() {
    var env = { args: ['x_foo'], rawName: 'x-foo', name: 'component'};

    it('saves the template to the right place', function() {
      var path = generator.savePath(generator.templates[1], env);
      path.should.equal('app/templates/components/x-foo.hbs');
    });

    it('saves the component to the right place', function() {
      var path = generator.savePath(generator.templates[0], env);
      path.should.equal('app/components/x_foo_component.js');
    });
  });
});
