/**
 * Escribe una función que determine si existe un path entre dos vertices de un graph.
 * El grafo es de tipo direccionado
 */

const graph = {
	a: [ 'c' ],
	b: [ 'c' ],
	c: [ 's', 'r' ],
	d: [ 'a' ],
	s: [ 'a', 'c' ],
	r: [ 'd' ],
	z: [ 'z' ]
};

function solveGraph( graph, start, end, visited = { } )
{
	if ( start === end ) {
		return true;
	}
	
	visited[ start ] = true;

	for ( const prop of graph[ start ] ) {
		if ( !visited[ prop ] && solveGraph( graph, prop, end, visited ) ) {
			return true;
		}
	}

	return false;
}

console.log( solveGraph( graph, 'a', 'r' ) ); // true
console.log( solveGraph( graph, 's', 'b' ) ); // false