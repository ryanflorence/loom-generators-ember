var generator = require('../../loom/generators/default');
var sinon = require('sinon');
var msg = require('loom/lib/message');

describe('default generator', function() {
  describe('before', function() {
    it('inflects the name of the resource to underscores and saves the original', function() {
      var env = { args: ['foo-bar'], name: 'controller' };
      generator.before(env);
      env.should.eql({
        args: ['foo_bar'],
        name: 'controller',
        rawName: 'foo-bar'
      });
    });

    it('requires a resource name', function() {
      var mock = sinon.mock(msg, 'error');
      mock.expects('error').once();
      generator.before({ args: [], name: 'controller' });
      mock.verify();
      mock.restore();
    });
  });

  describe('present', function() {
    it('inflects the resource name to an ember object name', function() {
      var env = { args: ['taco_cart'], name: 'model' };
      generator.present('taco_cart', {}, env).objectName.should.equal('TacoCart');
    });

    it('appends object types to objectName', function() {
      var env = { args: ['taco_cart'] };
      env.name = 'component';
      generator.present('taco_cart', {}, env).objectName.should.equal('TacoCartComponent');
      env.name = 'controller';
      generator.present('taco_cart', {}, env).objectName.should.equal('TacoCartController');
      env.name = 'route';
      generator.present('taco_cart', {}, env).objectName.should.equal('TacoCartRoute');
      env.name = 'view';
      generator.present('taco_cart', {}, env).objectName.should.equal('TacoCartView');
      env.name = 'model';
      generator.present('taco_cart', {}, env).objectName.should.equal('TacoCart');
    });
  });

  describe('template', function() {
    it('finds the right template for appendable object types', function() {
      var env = {name: 'controller'};
      generator.template(env).should.equal('app/controllers/controller_controller.js.hbs');
    });

    it('finds the right template for non-appendable object types', function() {
      var env = {name: 'model'};
      generator.template(env).should.equal('app/models/model.js.hbs');
    });
  });
});
