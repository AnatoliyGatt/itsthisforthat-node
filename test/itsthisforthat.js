var assert = require('assert');
var itsThisForThat = require('../lib/itsthisforthat')();

describe('itsthisforthat', function () {
    describe('init', function () {
        var defaultRequestOptions = {};

        before(function () {
            defaultRequestOptions = {
                hostname: 'itsthisforthat.com',
                port: 80,
                basePath: '/api.php'
            }
        });

        it('should have correct default request options', function () {
            assert.deepEqual(itsThisForThat.defaultRequestOptions, defaultRequestOptions, 'default request options should have correct initial property values');
        });
    });

    describe('functions', function () {
        describe('#getIdea()', function () {
            function validateIdea(idea) {
                assert.notEqual(idea, undefined, 'idea should not be undefined');
                assert.notEqual(idea.this, undefined, 'idea.this should not be undefined');
                assert.notEqual(idea.this, '', 'idea.this should not be empty');
                assert.notEqual(idea.that, undefined, 'idea.that should not be undefined');
                assert.notEqual(idea.that, '', 'idea.that should not be empty');
            }

            it('should respond with valid idea object', function (done) {
                itsThisForThat.getIdea(function (error, idea) {
                    if (error) {
                        throw error;
                    }
                    validateIdea(idea);
                    done();
                });
            });

            it('should fail when called without arguments', function () {
                assert.throws(function () {
                    itsThisForThat.getIdea();
                }, Error);
            });
        });
    });
});