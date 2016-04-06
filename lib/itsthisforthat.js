/**
 * @module itsthisforthat
 * @description Client for ItsThisForThat API.
 * @version 1.0.6
 * @author Anatoliy Gatt [anatoliy.gatt@aol.com]
 * @copyright Copyright (c) 2015-2016 Anatoliy Gatt
 * @license MIT
 */

'use strict';

/**
 * @private
 * @description Module dependencies.
 */

var http = require('http');

/**
 * @private
 * @constant {String}
 * @description Module version.
 */

var VERSION = require('../package.json').version;

/**
 * @public
 * @constructor
 * @description Initialize instance of ItsThisForThat with default request options.
 * @property {Object} defaultRequestOptions - Default request options.
 * @property {String} defaultRequestOptions.hostname - Default request hostname.
 * @property {Number} defaultRequestOptions.port - Default request port.
 * @property {String} defaultRequestOptions.basePath - Default request base path.
 */

function ItsThisForThat() {
    this.defaultRequestOptions = {
        hostname: 'itsthisforthat.com',
        port: 80,
        basePath: '/api.php'
    };
}

/**
 * @public
 * @function getIdea
 * @description Request random idea.
 * @param {getIdea~callback} callback - Callback when response comes in.
 */

ItsThisForThat.prototype.getIdea = function (callback) {
    if ((typeof callback !== 'function') || !(callback instanceof Function)) {
        throw new Error('getIdea(): callback is undefined or contains non-function value');
    }

    var request = http.get({
        hostname: this.defaultRequestOptions.hostname,
        port: this.defaultRequestOptions.port,
        path: this.defaultRequestOptions.basePath + '?' + 'json',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'Accept-Encoding': '*',
            'Accept-Language': 'en',
            'Accept-Datetime': new Date().toUTCString(),
            'Cache-Control': 'no-cache',
            'Connection': 'close',
            'Date': new Date().toUTCString(),
            'Host': this.defaultRequestOptions.hostname,
            'Max-Forwards': 1,
            'Pragma': 'no-cache',
            'TE': 'trailers, deflate',
            'User-Agent': 'itsthisforthat-node/' + VERSION
        },
        agent: false,
        keepAlive: false
    }, function (response) {
        var rawResponse = '';
        response.on('data', function (data) {
            rawResponse += data;
        });
        response.on('end', function () {
            var parsedResponse;
            try {
                parsedResponse = JSON.parse(rawResponse);
            } catch (error) {
                return callback(error);
            }
            callback(null, parsedResponse);
        });
        response.on('error', function (error) {
            callback(error);
        });
    });
    request.on('error', function (error) {
        callback(error);
    });
};

/**
 * @callback getIdea~callback
 * @description Use as callback in getIdea function.
 * @param {Object} error - Generic error object.
 * @param {Object} idea - Idea object.
 */

/**
 * @public
 * @description Expose instance of ItsThisForThat.
 * @returns {Object} - Instance of ItsThisForThat.
 */

module.exports = function () {
    return new ItsThisForThat();
};
