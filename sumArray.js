/**
 * Encontrar si la combinación de dos números cualesquiera del arreglo ordenado, suman el número dado.
 */

// 1

function findSum( array, number )
{
	for ( let i = 0, j = 0 ; i < ( array.length - 1 ) ; i++ )
	{
		for ( j = ( i + 1 ) ; j < array.length ; j++ )
		{
			if ( ( array[ i ] + array[ j ] ) === number )
			{
				return true;
			}
		}
	}
	
	return false;
}

// 2

function findSum( array, number )
{
	const arrAux = [ ];

	for ( let i = 0 ; i < array.length ; i++ )
	{
		if ( arrAux[ number - array[ i ] ] )
		{
			return true;
		}
		
		arrAux[ array[ i ] ] = true;
	}
	
	return false;
}

const orderedArray = [ 1, 2, 7, 9 ];

console.log( findSum( orderedArray, 16 ) ); // true
console.log( findSum( orderedArray, 17 ) ); // false