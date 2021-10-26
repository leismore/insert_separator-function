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
export { ISError };
