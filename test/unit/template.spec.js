var generator = require('../../loom/generators/template');
var sinon = require('sinon');
var msg = require('loom/lib/message');

describe('template generator', function() {
  describe('before', function() {
    it('validates whether or not its a component', function() {
      var mock = sinon.mock(msg);
      mock.expects('error').once().withArgs("Components must have a '-' character");
      var env = { args: ['components/foo'], rawName: 'components/foo' };
      generator.before(env);
      mock.verify();
      mock.restore();
    });
  });

  describe('template', function() {
    it('returns the component template for components', function() {
      var template = generator.template({rawName: 'components/x-foo'});
      template.should.equal('app/templates/components/component.hbs.hbs');
    });

    it('returns the template template for non-components', function() {
      var template = generator.template({rawName: 'foo'});
      template.should.equal('app/templates/template.hbs.hbs');
    });
  });

  describe('savePath', function() {

    it('saves component templates to the right place', function() {
      var env = { args: ['components/x_foo'], rawName: 'components/x-foo', name: 'template'};
      var template = generator.template(env);
      var path = generator.savePath(template, env);
      path.should.equal('app/templates/components/x-foo.hbs');
    });

    it('saves templates to the right place', function() {
      var env = { args: ['foo_bar'], rawName: 'foo_bar', name: 'template'};
      var template = generator.template(env);
      var path = generator.savePath(template, env);
      path.should.equal('app/templates/foo_bar.hbs');
    });
  });
});


