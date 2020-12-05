/**
 * Crear un bracket validator. Los brackets válidos son los siguientes: [ ] ( ) { }
 */

function hasBalanceBrackets( text )
{
	const stack = [ ];
	const brackets = {
		'{': 0, '}': '{',
		'[': 0, ']': '[',
		'(': 0, ')': '('
	};

	for ( let i = 0 ; i < text.length ; i++ )
	{
		const item = brackets[ text[ i ] ];

		if ( item === undefined ) {
			continue;
		}

		if ( !!item ) {
			if ( ( stack.length === 0 ) || ( stack.pop( ) !== brackets[ text[ i ] ] ) ) {
				return false;
			}
		}
		else {
			stack.push( text[ i ] );
		}
	}

	return ( stack.length === 0 );
}

console.log( hasBalanceBrackets( "{ [ ( ] ) }" ) ); // false
console.log( hasBalanceBrackets( "{ [ ( [ { ( )[ ]{ } } ] ) ] }" ) ); // true