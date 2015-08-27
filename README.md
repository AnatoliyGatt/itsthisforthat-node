# ItsThisForThat for Node.js

An asynchronous client library for ItsThisForThat [API](http://itsthisforthat.com/api.php/).

[![NPM Package Version][npm-package-version-badge]][npm-package-url]
[![NPM Package License][npm-package-license-badge]][npm-package-license-url]
[![NPM Package Downloads][npm-package-downloads-badge]][npm-package-url]
[![Travis CI Build Status][travis-ci-build-status-badge]][travis-ci-build-status-page-url]

[![NPM Package Statistics][npm-package-statistics-badge]][npm-package-url]

## Installation

`npm install itsthisforthat-node`

## Quick Start

The quickest way to get started is by executing following code:

```javascript
var itsThisForThat = require("itsthisforthat-node")();

itsThisForThat.getIdea(function(error, idea) {
    if(!error) {
        console.log(idea);
    } else {
        console.error(error);
    }
});
```

If everything went well, you'll see something like this in your console:

```javascript
{
    this: 'Salesforce.com',
    that: 'Beer'
}
```

## Documentation

### getIdea

Requests random idea.

#### Example

Requests random idea.

```javascript
itsThisForThat.getIdea(function(error, idea) {
    if(!error) {
        console.log("So, Basically, It's Like A " + idea.this + " for " + idea.that);
    } else {
        console.error(error);
    }
});
```

#### Errors

When errors occur, you receive an error object with default properties as a first argument of the callback.

## Tests

To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## License

Distributed under the [MIT License](LICENSE).

[npm-package-url]: https://npmjs.org/package/itsthisforthat-node

[npm-package-version-badge]: https://img.shields.io/npm/v/itsthisforthat-node.svg

[npm-package-license-badge]: https://img.shields.io/npm/l/itsthisforthat-node.svg
[npm-package-license-url]: http://opensource.org/licenses/MIT

[npm-package-downloads-badge]: https://img.shields.io/npm/dm/itsthisforthat-node.svg

[travis-ci-build-status-badge]: https://img.shields.io/travis/AnatoliyGatt/itsthisforthat-node.svg
[travis-ci-build-status-page-url]: https://travis-ci.org/AnatoliyGatt/itsthisforthat-node

[npm-package-statistics-badge]: https://nodei.co/npm/itsthisforthat-node.png?downloads=true&downloadRank=true&stars=true