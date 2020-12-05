/**
 * Dado un arreglo de números, encontrá el length de la secuencia creciente mas larga posible. Esta secuencia puede saltear números en el arreglo.
 */

function longestIncreasingSubsequence( numbers, index = 0, base = -1, memo = { } )
{
	if ( index === numbers.length ) {
		return 0;
	}
	
	const length = longestIncreasingSubsequence( numbers, ( index + 1 ), base, memo );
	
	if ( ( base >= 0 ) && ( numbers[ index ] < numbers[ base ] ) ) {
		return length;
	}
	
	if ( !memo[ index ] ) {
		memo[ index ] = longestIncreasingSubsequence( numbers, ( index + 1 ), index, memo ) + 1;
	}
	
	return Math.max( memo[ index ], length );
}

console.log( longestIncreasingSubsequence( [ 8, 9, 4, 10, 2, 3, 1 ] ) ); // 3 ( 8, 9, 10 )
console.log( longestIncreasingSubsequence( [ 10, 22, 9, 33, 20, 50, 41, 60, 80, 21, 23, 24, 25, 26, 27, 28 ] ) ); // 9 ( 10, 20, 21, 23, 24, 25, 26, 27, 28 )