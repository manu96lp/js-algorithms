/**
 * Dado dos arreglos ordenados devuelve un arreglo con los números que se repiten.
 * 
 * Ejemplos:
 * 
 * input: [1,3,5,7,10], [2,3,6,8,10,20]
 * output: [3, 10]
 */

function intersection( first, second )
{
	const found = [ ];
	
	let firstPos = ( first.length - 1 );
	let secondPos = ( second.length - 1 );
	
	do
	{
		if ( first[ firstPos ] === second[ secondPos ] ) {
			found.push( first[ firstPos ] );
			
			firstPos--;
			secondPos--;
		}
		else {
			( first[ firstPos ] > second[ secondPos ] ) ?
				firstPos-- : secondPos--;
		}
	}
	while ( ( firstPos >= 0 ) && ( secondPos >= 0 ) )
	
	return found;
}

console.log( intersection( [ 1, 3, 5, 7, 10 ], [ 2, 3, 6, 8, 10, 20 ] ) ); // 10, 3