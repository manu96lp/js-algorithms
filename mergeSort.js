/**
 * Implementar el método conocido como mergeSort para ordenar de menor a mayor
 */

function mergeSort( array )
{
	if ( array.length <= 1 )
	{
		return array;
	}
	
	let mid = Math.ceil( array.length / 2 );
	let left = array.slice( 0, mid );
	let right = array.slice( mid, array.length );
	
	left = mergeSort( left );
	right = mergeSort( right );
	
	return mergeLists( left, right );
}

function mergeLists( left, right )
{
	let result = [];
	
	let remaining;
	
	let leftIndex = 0;
	let rightIndex = 0;
	
	do
	{
		if ( left[ leftIndex ] <= right[ rightIndex ] )
		{
			result.push( left[ leftIndex++ ] );
			
			if ( leftIndex < left.length )
			{
				continue;
			}
			
			leftIndex = rightIndex;
			remaining = right;
		}
		else
		{
			result.push( right[ rightIndex++ ] );
			
			if ( rightIndex < right.length )
			{
				continue;
			}
			
			remaining = left;
		}
		
		do
		{
			result.push( remaining[ leftIndex++ ] );
		}
		while ( leftIndex < remaining.length )
	}
	while ( !remaining )
	
	return result;
}