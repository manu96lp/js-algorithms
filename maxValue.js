/**
 * Encontrar cuál es la máxima ganancia posible de comprar a un horario y vender a otro después.
 */

function maxValue( stocks )
{
	let max = stocks[ 1 ] - stocks[ 0 ];
	let min = stocks[ 0 ];
	
	for ( let i = 1 ; i < stocks.length ; i++ )
	{
		max = Math.max( max, stocks[ i ] - min );
		min = Math.min( min, stocks[ i ] );
	}
	
	return max;
};

console.log( maxValue( [ 4, 3, 2, 5, 11 ] ) ) // 9