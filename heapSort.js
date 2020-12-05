/**
 * Implementar el método conocido como heapSort para ordenar de menor a mayor
 */

function heapSort( array )
{
	let result = array.slice( );
	
	for ( let i = ( Math.floor( array.length / 2 ) - 1 ) ; i >= 0 ; i-- )
	{
		heapify( result, array.length, i );
	}
	
	let aux;
	
	for ( let i = ( array.length - 1 ) ; i > 0 ; i-- )
	{
		aux = result[ 0 ];
		
		result[ 0 ] = result[ i ];
		result[ i ] = aux;
		
		heapify( result, i, 0 );
	}
	
	return result;
}

function heapify( array, size, pos )
{
	let largest = pos;
	
	let left = ( pos * 2 ) + 1;
	let right = ( pos * 2 ) + 2;
	
	if ( ( left < size ) && ( array[ left ] > array[ largest ] ) )
	{
		largest = left;
	}
	
	if ( ( right < size ) && ( array[ right ] > array[ largest ] ) )
	{
		largest = right;
	}
	
	if ( largest != pos )
	{
		let aux = array[ pos ];
		
		array[ pos ] = array[ largest ];
		array[ largest ] = aux;
		
		heapify( array, size, largest );
	}
}