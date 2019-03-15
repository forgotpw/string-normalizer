# StringNormalizer

A simple library to consistently normalize a string so it can be used as a key in a data store.

## Installation

```shell
npm install --save string-normalizer
```

## Usage

```javascript
const stringNormalizer = require('string-normalizer');
const inputString = 'Example string ';
const normalizedString = stringNormalizer.normalizeString(inputString);
console.log(normalizedString);
> 'example-string'
```

## Testing

```shell
npm test 
```

## License

MIT

See [LICENSE](LICENSE.txt) to see the full text.
