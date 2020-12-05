/**
 * Implementar el método conocido como quickSort para ordenar de menor a mayor
 */

function quickSort( array )
{
	if ( array.length <= 1 )
	{
		return array;
	}
	
	let left = [ ];
	let right = [ ];
	
	let pivot = ( Math.random( ) * array.length ) | 0;
	
	for ( let i = 0 ; i < array.length ; i++ )
	{
		if ( i === pivot )
		{
			continue;
		}
		
		( array[ i ] < array[ pivot ] ) ?
			left.push( array[ i ] ) : right.push( array[ i ] );
	}
	
	left = quickSort( left );
	right = quickSort( right );
	
	left.push( array[ pivot ] );
	
	return left.concat( right );
}