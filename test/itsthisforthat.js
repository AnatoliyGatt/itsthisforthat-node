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

        it('should not override default request options', function () {
            itsThisForThat.defaultRequestOptions = {
                hostname: 'itsthisforthat.us',
                port: 3000,
                basePath: '/api.php'
            };

            assert.deepEqual(itsThisForThat.defaultRequestOptions, defaultRequestOptions, 'default request options should not be overridden');
        });
    });

    describe('functions', function () {
        describe('#getIdea()', function () {
            it('should respond with valid idea object', function (done) {
                itsThisForThat.getIdea(function (error, idea) {
                    if (!error) {
                        assert.notEqual(idea, undefined, 'idea should not be undefined');
                        assert.notEqual(idea.this, undefined, 'idea.this should not be undefined');
                        assert.notEqual(idea.that, undefined, 'idea.that should not be undefined');
                    } else {
                        assert.throws(function () {
                            throw error;
                        }, Error);
                    }
                    done();
                });
            });

            it('should fail when called without arguments', function () {
                assert.throws(function () {
                    itsThisForThat.getIdea();
                }, Error);
            });

            it('should not be overridden', function () {
                itsThisForThat.getIdea = function () {
                    return '#getIdea()';
                };

                assert.throws(function () {
                    assert.notEqual(itsThisForThat.getIdea(), '#getIdea()', '#getIdea() should not be overridden');
                }, Error);
            });
        });
    });
});