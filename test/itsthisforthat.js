var assert = require('assert');
var itsThisForThat = require('../lib/itsthisforthat')();

describe('itsthisforthat', () => {
  describe('init', () => {
    let defaultRequestOptions = {};

    before(() => {
      defaultRequestOptions = {
        hostname: 'itsthisforthat.com',
        port: 80,
        basePath: '/api.php'
      };
    });

    it('should have correct default request options', () => {
      assert.deepEqual(
        itsThisForThat.defaultRequestOptions,
        defaultRequestOptions,
        'default request options should have correct initial property values'
      );
    });
  });

  describe('functions', () => {
    describe('#getIdea()', () => {
      function validateIdea(idea) {
        assert.ok(idea, 'idea should not be undefined, null or empty');
        assert.ok(
          idea.this,
          'idea.this should not be undefined, null or empty'
        );
        assert.ok(
          idea.that,
          'idea.that should not be undefined, null or empty'
        );
      }

      it('should respond with valid idea object', (done) => {
        itsThisForThat.getIdea((error, idea) => {
          if (error) {
            return done(error);
          }
          validateIdea(idea);
          done();
        });
      });

      it('should fail when called without arguments', () => {
        assert.throws(() => {
          itsThisForThat.getIdea();
        }, Error);
      });
    });
  });
});
