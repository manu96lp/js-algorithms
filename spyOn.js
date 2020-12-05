/**
 * Implementa tu propia versión de la función spyOn que hace lo siguiente:
 * 	- Toma una función como parámetro
 * 	- Devuelve una función spy que toma cualquier numero de argumentos
 * 	- spy llama a la función y devuelve lo que ella devuelve
 * 	- spy tiene los siguientes métodos:
 * 		- .getCallCount(): Devuelve la cantidad de veces que el spy fue llamado
 * 		- .wasCalledWith(val): devuelve true si la función fue alguna vez llamada con ese valor, else false
 * 		- .returned(val): devuelve true si alguna vez devolvió ese valor.
 */

function spyOn( functionToSpy )
{
	let callCount = 0;
	
	const calledWith = new Set( );
	const returnedValues = new Set( );
	
	const spy = ( ...args ) => {
		const result = functionToSpy( ...args );
		
		args.forEach( ( arg ) => calledWith.add( arg ) );
		returnedValues.add( result );
		
		callCount++;

		return result;
	};
	
	spy.getCallCount = ( ) => callCount;
	spy.wasCalledWith = ( value ) => calledWith.has( value );
	spy.returned = ( value ) => returnedValues.has( value );

	return spy;
}

const adder = ( arg1, arg2 ) => arg1 + arg2;
const spier = spyOn( adder );

spier( 1, 2 );
spier( 3, 4 );

console.log( spier.getCallCount( ) ); // 2

console.log( spier.wasCalledWith( 5 ) ); // false
console.log( spier.wasCalledWith( 4 ) ); // true

console.log( spier.returned( 2 ) ); // false
console.log( spier.returned( 3 ) ); // true