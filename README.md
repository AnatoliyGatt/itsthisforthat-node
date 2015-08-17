# ItsThisForThat for Node.js

An asynchronous client library for ItsThisForThat [API](http://itsthisforthat.com/api.php/).

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![License][license]][license-url]
[![Travis Build][travis-image]][travis-url]

[![NPM Statistics][npm-statistics-image]][npm-url]

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

[npm-image]: https://img.shields.io/npm/v/itsthisforthat-node.svg
[npm-url]: https://npmjs.org/package/itsthisforthat-node
[downloads-image]: https://img.shields.io/npm/dm/itsthisforthat-node.svg
[downloads-url]: https://npmjs.org/package/itsthisforthat-node
[license]: https://img.shields.io/npm/l/itsthisforthat-node.svg
[license-url]: https://github.com/AnatoliyGatt/itsthisforthat-node/blob/master/LICENSE
[travis-image]: https://img.shields.io/travis/AnatoliyGatt/itsthisforthat-node/master.svg
[travis-url]: https://travis-ci.org/AnatoliyGatt/itsthisforthat-node
[npm-statistics-image]: https://nodei.co/npm/itsthisforthat-node.png?downloads=true&downloadRank=true&stars=true