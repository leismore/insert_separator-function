import { ISError } from './ISError';

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
{
    let parts:string[]  = [];
    let maxStart:number;

    if (typeof text !== 'string' || text === '')
    {
        throw new ISError({message: 'invalid_text', code: '1'});
    }

    if (typeof size !== 'number' || size < 1)
    {
        throw new ISError({message:'invalid_size', code:'2'});
    }
    else
    {
        size = Math.round(size);
    }

    if (typeof separator !== 'string' || separator === '')
    {
        throw new ISError({message:'invalid_separator', code:'3'});
    }

    maxStart = ( Math.ceil( text.length / size ) - 1 ) * size;

    for (let i=0,j=0; j<=maxStart; i++,j+=size)
    {
        parts[i] = text.substr(j, size);
    }

    return parts.join(separator);
}

export { insert_separator };
