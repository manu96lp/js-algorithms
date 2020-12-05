/**
 * Encontrar la suma de todos los elementos del arreglo y sus sub-arreglos
 */

function sumArray( array )
{
	let sum = 0;
	
	for ( let i = 0 ; i < array.length ; i++ )
	{
		sum += Array.isArray( array[ i ] ) ? sumArray( array[ i ] ) : array[ i ];
	}
	
	return sum;
}

console.log( sumArray( [ 1, 2, 4 ] ) ); // 7
console.log( sumArray( [ 2, [ 3, 4 ], 5, [ -3, [ 6, [ 4, 5 ] ] ] ] ) ); // 26