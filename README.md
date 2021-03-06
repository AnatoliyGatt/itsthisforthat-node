![itsthisforthat-node Logo][logo]

An asynchronous client library for ItsThisForThat [API](http://itsthisforthat.com/api.php/).

[![NPM Package Version][npm-package-version-badge]][npm-package-url]
[![NPM Package License][npm-package-license-badge]][npm-package-license-url]
[![NPM Package Downloads][npm-package-downloads-badge]][npm-package-url]
[![devDependencies Status][devDependencies-status-badge]][devDependencies-status-page-url]

[![Node Version][node-version-badge]][node-downloads-page-url]
[![Travis CI Build Status][travis-ci-build-status-badge]][travis-ci-build-status-page-url]
[![Code Climate Status][code-climate-status-badge]][code-climate-status-page-url]
[![Code Climate Test Coverage Status][code-climate-test-coverage-status-badge]][code-climate-test-coverage-status-page-url]
[![Inch CI Documentation Coverage Status][inch-ci-documentation-coverage-status-badge]][inch-ci-documentation-coverage-status-page-url]
[![Styled with Prettier][styled-with-prettier-badge]][styled-with-prettier-page-url]

[![NPM Package Statistics][npm-package-statistics-badge]][npm-package-url]

## Installation

`npm install itsthisforthat-node`

## Quick Start

The quickest way to get started is by executing following code:

```javascript
const itsThisForThat = require('itsthisforthat-node')();

try {
  let idea = await itsThisForThat.getIdea();
  console.log(idea);
} catch (error) {
  console.error(error);
}
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
try {
  let idea = await itsThisForThat.getIdea();
  console.log('So, Basically, It\'s Like A ' + idea.this + ' for ' + idea.that);
} catch (error) {
  console.error(error);
}
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

[logo]: https://cldup.com/ioNRCvqF8P.png

[npm-package-url]: https://npmjs.org/package/itsthisforthat-node

[npm-package-version-badge]: https://img.shields.io/npm/v/itsthisforthat-node.svg?style=flat-square

[npm-package-license-badge]: https://img.shields.io/npm/l/itsthisforthat-node.svg?style=flat-square
[npm-package-license-url]: http://opensource.org/licenses/MIT

[npm-package-downloads-badge]: https://img.shields.io/npm/dm/itsthisforthat-node.svg?style=flat-square

[devDependencies-status-badge]: https://david-dm.org/AnatoliyGatt/itsthisforthat-node/dev-status.svg?style=flat-square
[devDependencies-status-page-url]: https://david-dm.org/AnatoliyGatt/itsthisforthat-node#info=devDependencies

[node-version-badge]: https://img.shields.io/node/v/itsthisforthat-node.svg?style=flat-square
[node-downloads-page-url]: https://nodejs.org/en/download/

[travis-ci-build-status-badge]: https://img.shields.io/travis/AnatoliyGatt/itsthisforthat-node.svg?style=flat-square
[travis-ci-build-status-page-url]: https://travis-ci.org/AnatoliyGatt/itsthisforthat-node

[code-climate-status-badge]: https://img.shields.io/codeclimate/github/AnatoliyGatt/itsthisforthat-node.svg?style=flat-square
[code-climate-status-page-url]: https://codeclimate.com/github/AnatoliyGatt/itsthisforthat-node

[code-climate-test-coverage-status-badge]: https://img.shields.io/codeclimate/coverage/github/AnatoliyGatt/itsthisforthat-node.svg?style=flat-square
[code-climate-test-coverage-status-page-url]: https://codeclimate.com/github/AnatoliyGatt/itsthisforthat-node/coverage

[inch-ci-documentation-coverage-status-badge]: https://inch-ci.org/github/AnatoliyGatt/itsthisforthat-node.svg?style=flat-square
[inch-ci-documentation-coverage-status-page-url]: https://inch-ci.org/github/AnatoliyGatt/itsthisforthat-node

[styled-with-prettier-badge]: https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square
[styled-with-prettier-page-url]: https://github.com/prettier/prettier

[npm-package-statistics-badge]: https://nodei.co/npm/itsthisforthat-node.png?downloads=true&downloadRank=true&stars=true
