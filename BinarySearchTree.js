/**
 * Binary Seach Tree
 * 
 * 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
 * 
 * corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
 * corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
 * corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
 * corre breadth-first cuando breadthFirstForEach() es ejecutado
 */

function BinarySearchTree( data ) {
	this.value = data;
	this.left = null;
	this.right = null;
}

BinarySearchTree.prototype.insert = function( data )
{
	if ( this.value > data )
	{
		( this.left === null ) ?
			( this.left = new BinarySearchTree( data ) ) : this.left.insert( data );
	}
	else
	{
		( this.right === null ) ?
			( this.right = new BinarySearchTree( data ) ) : this.right.insert( data );
	}

	return data;
};

BinarySearchTree.prototype.contains = function( data )
{
	if ( this.value === data )
	{
		return true;
	}
	
	return ( this.value > data ) ? ( !!this.left && this.left.contains( data ) ) : ( !!this.right && this.right.contains( data ) );
};

BinarySearchTree.prototype.depthFirstForEach = function( cb, type )
{
	let ts = new TreeSearcher( cb );

	( type !== 'pre-order') ? ( type !== 'post-order' ) ?
		ts.doDfsInOrder( this ) : ts.doDfsPostOrder( this ) : ts.doDfsPreOrder( this );
};

BinarySearchTree.prototype.breadthFirstForEach = function( cb )
{
	let list = [ this ];
	let ts = new TreeSearcher( cb );

	ts.doBfs( list );
};

BinarySearchTree.prototype.size = function( )
{
	if ( !this.left && !this.right )
	{
		return 1;
	}

	return 1 + ( !!this.left ? this.left.size( ) : 0 ) + ( !!this.right ? this.right.size( ) : 0 );
};

// Tree Searcher
// Helper class for traversing/searching a binary tree

function TreeSearcher( cb ) {
	this.cb = cb;
}

TreeSearcher.prototype.doDfsInOrder = function( node )
{
	if ( !!node.left )
	{
		this.doDfsInOrder( node.left );
	}

	this.cb( node.value );

	if ( !!node.right )
	{
		this.doDfsInOrder( node.right );
	}
};

TreeSearcher.prototype.doDfsPreOrder = function( node )
{
	this.cb( node.value );

	if ( !!node.left )
	{
		this.doDfsPreOrder( node.left );
	}

	if ( !!node.right )
	{
		this.doDfsPreOrder( node.right );
	}
};

TreeSearcher.prototype.doDfsPostOrder = function( node )
{
	if ( !!node.left )
	{
		this.doDfsPostOrder( node.left );
	}

	if ( !!node.right )
	{
		this.doDfsPostOrder( node.right );
	}

	this.cb( node.value );
};

TreeSearcher.prototype.doBfs = function( list )
{
	if ( list.length === 0 )
	{
		return;
	}

	let current = list.shift( );

	this.cb( current.value );

	!!current.left && list.push( current.left );
	!!current.right && list.push( current.right );

	this.doBfs( list );
};