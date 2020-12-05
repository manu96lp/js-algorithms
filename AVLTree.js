function AVLTree( data )
{
	this.value = data;
	this.left = null;
	this.right = null;
	this.height = 0;
}

AVLTree.prototype.insert = function( data )
{
	if ( this.value > data )
	{
		( this.left === null ) ?
			( this.left = new AVLTree( data ) ) : this.left.insert( data );
	}
	else
	{
		( this.right === null ) ?
			( this.right = new AVLTree( data ) ) : this.right.insert( data );
	}

	this.updateHeight( );
	
	return this.isBalanced( ) ? this : this.balance( );
};

AVLTree.prototype.delete = function( data )
{
	let root = this;
	
	if ( this.value > data )
	{
		if ( this.left !== null )
		{
			this.left = this.left.delete( data );
		}
	}
	else if ( this.value < data )
	{
		if ( this.right !== null )
		{
			this.right = this.right.delete( data );
		}
	}
	else
	{
		root = null;
		
		if ( !!this.left )
		{
			if ( !!this.right )
			{
				if ( !!this.right.left )
				{
					root = this.right.popMin( );
					
					root.left = this.left;
					root.right = this.right;
				}
				else
				{
					root = this.right;
					root.left = this.left;
				}
			}
			else
			{
				root = this.left;
			}
		}
		else if ( !!this.right )
		{
			root = this.right;
		}
		
		this.right = null;
		this.left = null;
	}
	
	root.updateHeight( );
	
	return root.isBalanced( ) ? root : root.balance( );
};

AVLTree.prototype.contains = function( data )
{
	if ( this.value === data )
	{
		return true;
	}
	
	return ( this.value > data ) ? ( !!this.left && this.left.contains( data ) ) : ( !!this.right && this.right.contains( data ) );
};

AVLTree.prototype.balance = function( )
{
	let diff = this.balanceFactor( );
	
	if ( ( diff < 2 ) && ( diff > -2 ) )
	{
		return this;
	}
	
	let root;
	
	if ( diff < 0 )
	{
		diff = ( ( !!this.left.right ? this.left.right.height : 0 ) - ( !!this.left.left ? this.left.left.height : 0 ) )
		root = ( diff < 0 ) ? this.rotate( true ) : this.doubleRotate( true );
	}
	else
	{
		diff = ( ( !!this.right.right ? this.right.right.height : 0 ) - ( !!this.right.left ? this.right.left.height : 0 ) )
		root = ( diff > 0 ) ? this.rotate( false ) : this.doubleRotate( false );
	}
	
	return root;
};

AVLTree.prototype.rotate = function( toTheLeft )
{
	let root;
	
	if ( toTheLeft )
	{
		root = this.left;
		this.left = root.right;
		root.right = this;
	}
	else
	{
		root = this.right;
		this.right = root.left;
		root.left = this;
	}
	
	this.updateHeight( );
	root.updateHeight( );
	
	return root;
};

AVLTree.prototype.doubleRotate = function( toTheLeft )
{
	let root;
	
	if ( toTheLeft )
	{
		this.left = this.left.rotate( false );
		root = this.rotate( true );
	}
	else
	{
		this.right = this.right.rotate( true );
		root = this.rotate( false );
	}
	
	return root;
};

AVLTree.prototype.balanceFactor = function( )
{
	let lh = ( !!this.left ? this.left.height : 0 );
	let rh = ( !!this.right ? this.right.height : 0 );
	
	return ( rh - lh );
}

AVLTree.prototype.isBalanced = function( )
{
	return ( Math.abs( this.balanceFactor( ) ) < 2 );
};

AVLTree.prototype.updateHeight = function( )
{
	( !this.left && !this.right ) ?
		( this.height = 0 ) :
		( this.height = 1 + Math.max( ( !!this.left ? this.left.height : 0 ), ( !!this.right ? this.right.height : 0 ) ) );
};

AVLTree.prototype.popMin = function( )
{
	if ( !this.left )
	{
		return this;
	}
	
	let node = this.left;
	
	if ( !node.left )
	{
		this.left = node.right;
		node.right = null;
	}
	else
	{
		node = node.left.popMin( );
	}
	
	return node;
};