# insert_separator-function

A JavaScript function that converts a string into a series of fixed-length string chunks divided by a given separator.

## Installation

`npm install @leismore/insert_separator`

## Usage

```typescript
import { insert_separator } from '@leismore/insert_separator';

const ID = 'ABCD1234EFGH5678';
const CHUNK_SIZE = 4;
const SEPARATOR = '-';

// Output: ABCD-1234-EFGH-5678
console.log( insert_separator(ID, CHUNK_SIZE, SEPARATOR) );
```

## API

```typescript
/**
 * @param text      {string}   - The text waiting for being added with separators
 * @param size      {int}      - The text chunk length
 * @param separator {string}
 * @returns         {string}   - The text with separators
 * @throws          {ISError}
 *   1  invalid_text
 *   2  invalid_size
 *   3  invalid_separator
 */
function insert_separator(text:string, size:number, separator:string):string
```

```typescript
/**
 * ISError is the Error class for this project.
 * Refer to @leismore/lmerror <https://www.npmjs.com/package/@leismore/lmerror>
 *
 * Code           Message
 * 1              invalid_text
 * 2              invalid_size
 * 3              invalid_separator
 */
import { LMError } from '@leismore/lmerror';
class    ISError extends LMError {}
```

## Authors

* [Kyle Chine](https://www.kylechine.name) since 26 October 2021
