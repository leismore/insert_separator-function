import { insert_separator, ISError } from '../src/index';
import { assert }                    from 'chai';

const TEXT         = 'ABCD1234EFGH5678';
const TEXT_EMPTY   = '';
const TEXT_ONE     = 'A';

const SIZE          = 4;
const SIZE_NEGATIVE = -4;
const SIZE_ZERO     = 0;
const SIZE_ONE      = 1;
const SIZE_THREE    = 3;
const SIZE_16       = 16;
const SIZE_17       = 17;
const SIZE_FLOAT    = 3.01;

const SEPARATOR       = '-';
const SEPARATOR_EMPTY = '';
const SEPARATOR_TWO   = '+-';

describe('Testing insert_separator Function', function(){

    describe('A) Standard TEXT', function(){
        it('1. Standard inputs', function(){
            assert( insert_separator(TEXT,SIZE,SEPARATOR) === 'ABCD-1234-EFGH-5678' );
        });

        it('2. Negative size', function(){
            assert.throws( function(){
                insert_separator(TEXT, SIZE_NEGATIVE, SEPARATOR);
            }, ISError, 'invalid_size' );
        });

        it('3. Zero size', function(){
            assert.throws( function(){
                insert_separator(TEXT, SIZE_ZERO, SEPARATOR);
            }, ISError, 'invalid_size' );
        });

        it('4. Size one', function(){
            assert( insert_separator(TEXT,SIZE_ONE,SEPARATOR) === 'A-B-C-D-1-2-3-4-E-F-G-H-5-6-7-8' );
        });

        it('5. Size with remainder', function(){
            assert( insert_separator(TEXT,SIZE_THREE,SEPARATOR) === 'ABC-D12-34E-FGH-567-8' );
        });

        it('6. Size = text length', function(){
            assert( insert_separator(TEXT,SIZE_16,SEPARATOR) === 'ABCD1234EFGH5678' );
        });

        it('7. Size > text length', function(){
            assert( insert_separator(TEXT,SIZE_17,SEPARATOR) === 'ABCD1234EFGH5678' );
        });

        it('8. Float size', function(){
            assert( insert_separator(TEXT,SIZE_FLOAT,SEPARATOR) === 'ABC-D12-34E-FGH-567-8' );
        });

        it('9. Empty separator', function(){
            assert.throws( function(){
                insert_separator(TEXT, SIZE, SEPARATOR_EMPTY);
            }, ISError, 'invalid_separator' );
        });

        it('10. Two characters separator', function(){
            assert( insert_separator(TEXT,SIZE,SEPARATOR_TWO) === 'ABCD+-1234+-EFGH+-5678' );
        });
    });

    describe('B) Empty TEXT', function(){
        it('1. Empty text', function(){
            assert.throws( function(){
                insert_separator(TEXT_EMPTY, SIZE, SEPARATOR);
            }, ISError, 'invalid_text' );
        });
    });

    describe('C) Single Character TEXT', function(){
        it('1. Standard inputs', function(){
            assert( insert_separator(TEXT_ONE,SIZE,SEPARATOR) === 'A' );
        });

        it('2. Negative size', function(){
            assert.throws( function(){
                insert_separator(TEXT_ONE, SIZE_NEGATIVE, SEPARATOR);
            }, ISError, 'invalid_size' );
        });

        it('3. Zero size', function(){
            assert.throws( function(){
                insert_separator(TEXT_ONE, SIZE_ZERO, SEPARATOR);
            }, ISError, 'invalid_size' );
        });

        it('4. Size one', function(){
            assert( insert_separator(TEXT_ONE,SIZE_ONE,SEPARATOR) === 'A' );
        });

        it('5. Size with remainder', function(){
            assert( insert_separator(TEXT_ONE,SIZE_THREE,SEPARATOR) === 'A' );
        });

        it('6. Float size', function(){
            assert( insert_separator(TEXT_ONE,SIZE_FLOAT,SEPARATOR) === 'A' );
        });

        it('7. Empty separator', function(){
            assert.throws( function(){
                insert_separator(TEXT_ONE, SIZE, SEPARATOR_EMPTY);
            }, ISError, 'invalid_separator' );
        });

        it('8. Two characters separator', function(){
            assert( insert_separator(TEXT_ONE,SIZE,SEPARATOR_TWO) === 'A' );
        });
    });

});
