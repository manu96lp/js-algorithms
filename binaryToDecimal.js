/**
 * Escribe una función que pase un string en binario a un número decimal
 */

function binaryToDecimal( binary )
{
    let pos = 0;
    let sum = 0;

    while ( binary > 0 ) {
        if ( ( binary % 10 ) > 0 ) {
            sum += Math.pow( 2, pos );
        }


        binary = ( binary / 10 | 0 );
        pos = ( pos + 1 );
    }

    return sum;
}

function binaryToDecimalRec( binary, pos = 0, sum = 0 )
{
    if ( binary === 0 ) {
        return sum;
    }

    if ( ( binary % 10 ) > 0 ) {
        sum += Math.pow( 2, pos );
    }

    binary = ( binary / 10 | 0 );
    pos = ( pos + 1 );

    return binaryToDecimalRec( binary, pos, sum );
}

console.log( "Binary: 1010 | Common: " + binaryToDecimal( 1010 ) + " | Recursive: " + binaryToDecimalRec( 1010 ) ); // 10
console.log( "Binary: 101000 | Common: " + binaryToDecimal( 101000 ) + " | Recursive: " + binaryToDecimalRec( 101000 ) ); // 40