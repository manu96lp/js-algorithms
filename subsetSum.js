/**
 * Dada una suma objetiva, 'target' y un arreglo de números positivos:
 * 
 * Devolver true si cualquier combinación de números en el arreglo suma el target.
 * Devolver false si los números no pueden ser usados para sumar el target.
 */

// 1

function subsetSum( numbers, target )
{
	let sums;
	
	for ( let i = 0, j = 0, k = 0, l = 0 ; i < numbers.length - 1 ; i++ )
	{
		sums = [ numbers[ i ] ];
		
		for ( j = ( i + 1 ) ; j < numbers.length ; j++ )
		{
			l = sums.length;
			
			for ( k = 0 ; k < l; k++ )
			{
				if ( numbers[ j ] + sums[ k ] > target ) {
					continue;
				}
				
				if ( ( numbers[ j ] + sums[ k ] ) === target ) {
					return true;
				}
				
				sums.push( numbers[ j ] + sums[ k ] );
			}
		}
	}
	
	return false;
}

// 2

function subsetSum( numbers, target )
{
	const sums = new Set( [ 0 ] );
	
	for ( let i = 0, j = 0, k = 0 ; i < numbers.length - 1 ; i++ )
	{
		k = [ ...sums ];
		
		for ( j = 0 ; j < k.length ; j++ )
		{
			if ( ( k[ j ] + numbers[ i ] ) <= target ) {
				continue;
			}
			
			if ( ( k[ j ] + numbers[ i ] ) === target ) {
				return true;
			}
			
			sums.add( k[ j ] + numbers[ i ] );
		}
	}
	
	return false;
}

console.log( subsetSum( [ 1, 3, 5, 7, 9 ], 26 ) ); // false
console.log( subsetSum( [ 1, 3, 5, 7, 9 ], 16 ) ); // true