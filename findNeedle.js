/**
 * Determinar si el primer string, needle, esta dentro del segundo, haystack, y en dicho caso, devolver el indice en el que esto ocurre.
 */

function findNeedle( haystack, needle )
{
	let first = -1;
	let pos = -1;

	for ( let i = 0, j = 0 ; i < haystack.length ; i++ )
	{
		if ( haystack[ i ] === needle[ j ] ) {
			if ( first < 0 ) {
				first = i;
			}
			
			j++;
			
			if ( j === needle.length ) {
				pos = first;
				
				break;
			}
		}
		else {
			j = 0;
			first = -1;
		}
	}

	return pos;
}

const haystack = "react-redux";
const needle = "redux";

console.log( findNeedle( haystack, needle ) ); // 6
console.log( findNeedle( haystack, "none" ) ); // -1