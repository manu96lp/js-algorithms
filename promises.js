/**
 * Promises Workshop: construye la libreria de ES6 promises
 */

function $Promise( executor )
{ 
	if ( typeof executor !== 'function' )
	{
		throw new TypeError( 'Executor must be a function' );
	}
	
	this._state = 'pending';
	this._handlerGroups = [];
	
	executor( this._internalResolve.bind( this ), this._internalReject.bind( this ) );
}

$Promise.prototype._internalResolve = function( value )
{
	if ( this._state !== 'pending' )
	{
		return;
	}
	
	this._state = 'fulfilled';
	this._value = value;
	
	this._callHandlers( );
};

$Promise.prototype._internalReject = function( value )
{
	if ( this._state !== 'pending' )
	{
		return;
	}
	
	this._state = 'rejected';
	this._value = value;
	
	this._callHandlers( );
};

$Promise.prototype._callHandlers = function( )
{
	let result;
	
	if ( this._state === 'fulfilled' )
	{
		this._handlerGroups.forEach( handler => {
			try
			{
				if ( handler.successCb )
				{
					result = handler.successCb( this._value );
					
					if ( result instanceof $Promise )
					{
						result.then( function( data ) {
							handler.downstreamPromise._internalResolve( data );
						}, function( error ) {
							handler.downstreamPromise._internalReject( error );
						} );
					}
					else
					{
						handler.downstreamPromise._internalResolve( result );
					}
				}
				else
				{
					handler.downstreamPromise._internalResolve( this._value );
				}
			}
			catch ( error )
			{
				handler.downstreamPromise._internalReject( error );
			}
		} );
	}
	else
	{
		this._handlerGroups.forEach( handler => {
			try
			{
				if ( handler.errorCb )
				{
					result = handler.errorCb( this._value );
					
					if ( result instanceof $Promise )
					{
						result.then( function( data ) {
							handler.downstreamPromise._internalResolve( data );
						}, function( error ) {
							handler.downstreamPromise._internalReject( error );
						} );
					}
					else
					{
						handler.downstreamPromise._internalResolve( result );
					}
				}
				else
				{
					handler.downstreamPromise._internalReject( this._value );
				}
			}
			catch ( error )
			{
				handler.downstreamPromise._internalReject( error );
			}
		} );
	}
	
	this._handlerGroups = [ ];
};

$Promise.prototype.then = function( successCb, errorCb )
{
	let downstreamPromise = new $Promise( ( ) => { } );
	
	this._handlerGroups.push( {
		successCb: ( typeof successCb === 'function' ) && successCb,
		errorCb: ( typeof errorCb === 'function' ) && errorCb,
		downstreamPromise
	} );
	
	if ( this._state !== 'pending' )
	{
		this._callHandlers( );
	}
	
	return downstreamPromise;
};

$Promise.prototype.catch = function( errorCb )
{
	return this.then( null, errorCb );
};

$Promise.resolve = function( value )
{
	if ( value instanceof $Promise )
	{
		return value;
	}
	
	let promise = new $Promise( resolve => {
		resolve( value );
	} );
	
	return promise;
};

$Promise.all = function( values )
{
	if ( !( values instanceof Array ) )
	{
		throw new TypeError( 'Values must be an array' );
	}
	
	let results = [];
	let finished = 0;
	
	let promise = new $Promise( ( resolve, reject ) => {
		values.forEach( ( v, i ) => {
			$Promise.resolve( v ).then( data => {
				results[ i ] = data;
				finished++;
				
				if ( finished === values.length )
				{
					resolve( results );
				}
			} ).catch( e => reject( e ) );
		} );
	} );
	
	return promise;
};