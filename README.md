# bijective-link-shortener
[![Build Status](https://travis-ci.org/ICJIA/bijective-link-shortener.svg?branch=master)](https://travis-ci.org/ICJIA/bijective-link-shortener)
[![Coverage Status](https://coveralls.io/repos/github/ICJIA/bijective-link-shortener/badge.svg?branch=master)](https://coveralls.io/github/ICJIA/bijective-link-shortener?branch=master)

Base conversion. Convert between Base 10 and Base 58 (default).

Can be used for a link shortener, for example.

For more on [bijective functions](https://en.wikipedia.org/wiki/Bijection) and link shortening, please see:
- https://stackoverflow.com/questions/742013/how-to-code-a-url-shortener


## Installation

```
npm install bijective-link-shortener -S
```

## Default encoding alphabet
```123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ```

58 characters. No number '0', no upper-case letter 'O', no upper-case letter 'I', no uppercase letter 'l'.

The default alphabet can be set manually and/or randomized. See API below.

## Basic Usage
```
const baseConvert = require('bijective-link-shortener')

const databaseId = 2347247

baseConvert.encode(databaseId) // d2KM

baseConvert.decode('d2KM') // 2347247
```
## API
```baseConvert.encode(num)```

Returns ```string```. Encodes a given seed value (such as a unique database ID) into a string based on the selected encoding alphabet.

```baseConvert.decode(str)```

Returns ```integer```. Decodes a given string value (such as a short URL string) into a number based on the selected encoding alphabet.

```baseConvert.setAlphabet(str)```

Returns ```string```. Assign a new encoding alpahbet and echoes it back.

- Checks to make sure letters are unique/not-repeated

```baseConvert.getAlphabet()```

Returns ```string```. Current encoding alphabet.

```baseConvert.getBase()```

Returns ```integer```. The ength of current encoding alphabet.

- For example, a 58 character encoding alphabet equals a Base 58 conversion. A 33 character alphabet equals a Base 33 conversion.

```baseConvert.isInteger(num)```

Returns ```boolean```. Indicates whether a given number is an integer.

- Used to confirm ```baseConvert.encode(num)``` number is valid.

```baseConvert.isPositive(num)```

Returns ```boolean```. Indicates whether a given number is positive.

- Used to confirm  ```baseConvert.encode(num)``` number is valid.

```baseConvert.isUnique(str)```

Returns ```boolean```.  Indicates whether given string has no repeating characters.

- Used to confirm ```baseConvert.setAlphabet(str)``` is valid.

```baseConvert.randomizeAlphabet()```

Returns ```string```. Shuffles current alphabet.
