/**
 * Escribe una función que pase un string en número decimal a un número binario
 */

function decimalToBinary( decimal )
{
    let sum = 0;
    let pos = 0;

    while ( decimal > 0 ) {
        if ( ( decimal % 2 ) > 0 ) {
            sum += ( Math.pow( 10, pos ) );
        }

        pos = ( pos + 1 );
        decimal = ( decimal / 2 | 0 );
    }

    return sum;
}

function decimalToBinaryRec( decimal, pos = 0, sum = 0 )
{
    if ( decimal === 0 ) {
        return sum;
    }

    if ( ( decimal % 2 ) > 0 ) {
        sum += ( Math.pow( 10, pos ) );
    }

    pos = ( pos + 1 );
    decimal = ( decimal / 2 | 0 );

    return decimalToBinaryRec( decimal, pos, sum );
}

console.log( "Number: 10 | Common: " + decimalToBinary( 10 ) + " | Recursive: " + decimalToBinaryRec( 10 ) ); // 1010
console.log( "Number: 40 | Common: " + decimalToBinary( 40 ) + " | Recursive: " + decimalToBinaryRec( 40 ) ); // 101000