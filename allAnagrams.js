/**
 * Implementar una función que a partir de un string recibido como parámetro genere todos los posibles anagramas de ese string y retorne un arreglo con ellos.
 */

var allAnagrams = function( string, array, index )
{
	if ( !array )
	{
		array = [];
		index = 0;
	}
	
	if ( index < string.length )
	{
		let arr = string.split( "" );
		
		for ( let i = index ; i < string.length ; i++ )
		{
			swapValues( arr, i, index );
			allAnagrams( arr.join( "" ), array, ( index + 1 ) );
		}
	}
	else
	{
		array.push( string );
	}
	
	if ( index === 0 )
	{
		return Array.from( new Set( array ) );
	}
};