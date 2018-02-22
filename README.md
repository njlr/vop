# vop

Value-orientated programming tools for JavaScript 💎

[![Travis](https://img.shields.io/travis/njlr/seq.svg)](https://travis-ci.org/njlr/vop) 

```javascript=
yarn add @njlr/vop
```

## Why?

JavaScript does not support custom value-types, but we can get most of the way there using the pipeline operator (`|>`) and a comparison library. 

The first concept we need to abstract away is equality. Here, an `equality` is defined as an object with `hashCode` and `equals`. JavaScript's default equality might look like this: 

```javascript=
const strictEquality = {
  hashCode: _ => 0, 
  equals: x => y => x === y, 
}; 
``` 

From an equality object, we can construct an equals function: 

```javascript=
import { equalsFromEquality } from '@njlr/vop`; 

const equals = equalsFromEquality(strictEquality);

equals(1)(1) // true

// Or using |> ...
1 |> equals(1) // true
```

We're almost there. This library implements _structural_ equality, which has the behaviour we want! 

```javascript=
import { equals } from './index.js';

const p = {
  x: 1, 
  y: 2,
};

p |> equals({ x: 1, y: 2}); // true

[ 1, 2, 3 ] |> equals([ 1, 2, 3]); // true

1 |> equals(1) // true

'abc |> equals('abc') // true
```


## Development

Dependencies are managed by Yarn:

```bash=
yarn install --pure-lockfile
```

To run all tests:

```bash=
yarn test 
```

To build the library:

```bash=
yarn build 
```
