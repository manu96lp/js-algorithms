/**
 * Transforma una función que utilice múltiples argumentos en una secuencia de funciones que utilicen un único argumento.
 */

function curry( functionToCurry )
{
	const curried = ( ...args ) => {
		if ( args.length === functionToCurry.length ) {
			return functionToCurry( ...args );
		}
		
		return ( arg ) => curried( ...args, arg );
	}
	
	return curried;
}

function sumAllThree( arg1, arg2, arg3 ) {
    return arg1 + arg2 + arg3;
}

const curried = curry( sumAllThree );

const firstReturn = curried( 1 );
const secondReturn = firstReturn( 2 );
const thirdReturn = secondReturn( 3 );

console.log( thirdReturn ); // 6