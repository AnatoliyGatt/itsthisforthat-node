/**
 * @module itsthisforthat
 * @description Client for ItsThisForThat API.
 * @version 3.0.0
 * @author Anatoliy Gatt [anatoliy.gatt@aol.com]
 * @copyright Copyright (c) 2015-2017 Anatoliy Gatt
 * @license MIT
 */

'use strict';

/**
 * @private
 * @description Module dependencies.
 */

const http = require('http');

/**
 * @private
 * @constant {String}
 * @description Module version.
 */

const VERSION = require('../package.json').version;

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

ItsThisForThat.prototype.getIdea = function () {
  let self = this;
  return new Promise(function (resolve, reject) {
    const request = http.get({
      hostname: self.defaultRequestOptions.hostname,
      port: self.defaultRequestOptions.port,
      path: self.defaultRequestOptions.basePath + '?' + 'json',
      headers: {
        Accept: 'application/json',
        'Accept-Charset': 'utf-8',
        'Accept-Encoding': '*',
        'Accept-Language': 'en',
        'Accept-Datetime': new Date().toUTCString(),
        'Cache-Control': 'no-cache',
        Connection: 'close',
        Date: new Date().toUTCString(),
        Host: self.defaultRequestOptions.hostname,
        'Max-Forwards': 1,
        Pragma: 'no-cache',
        TE: 'trailers, deflate',
        'User-Agent': 'itsthisforthat-node/' + VERSION
      },
      agent: false,
      keepAlive: false
    }, (response) => {
        let rawResponse = '';
        response.on('data', (data) => {
          rawResponse += data;
        });
        response.on('end', () => {
          let parsedResponse;
          try {
            parsedResponse = JSON.parse(rawResponse);
          } catch (error) {
            return reject(error);
          }
          return resolve(parsedResponse);
        });
        response.on('error', (error) => {
          return reject(error);
        });
      }
    );
    request.on('error', (error) => {
      return reject(error);
    });
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

module.exports = () => {
  return new ItsThisForThat();
};
