/**
 * Implementar un stack que tenga los siguientes métodos:
 * 	- push(value) : añadir el elemento, value, al stack.
 * 	- pop ( ) : sacar un elemento del stack.
 * 	- min ( ) : obtener el elemento con el valor mínimo.
 * 
 * Todos los métodos deben ser O( 1 )
 */

class MinStack
{
	constructor( ) {
		this.head = null;
	}

	push( element ) {
		const current = this.head;
		
		this.head = {
			element,
			previous: current,
			min: ( !current || ( current.min > element ) ) ? element : current.min,
		};

		return element;
	}

	pop( ) {
		if ( !this.head ) {
			return null;
		}
		
		const element = this.head.element;

		this.head = this.head.previous;

		return element;
	}

	min( ) {
		if ( !this.head ) {
			return null;
		}

		return this.head.min;
	}
}

const minStack = new MinStack( );

minStack.push( 3 );
minStack.push( 5 );
minStack.push( 4 );
minStack.push( 1 );

console.log( minStack.min( ) ); // 1

minStack.pop( );

console.log( minStack.min( ) ); // 3