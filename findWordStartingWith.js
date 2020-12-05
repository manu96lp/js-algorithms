/**
 * Dado un "libro" y un string para buscar, devolver todos los indices donde la palabra empieza con ese string.
 * El libro vendrá con dos cosas: un id y un texto. La búsqueda tiene que ser case insensitive.
 */

function findWordsStartingWith( book, word, separators = [ ' ', '.', ',' ] )
{
	const indexes = [ ];

	let wordStarting = true;

	for ( let i = 0, j = 0 ; i < book.text.length ; i++ )
	{
		if ( !wordStarting )
		{
			if ( separators.includes( book.text[ i ] ) )
			{
				wordStarting = true;
			}

			continue;
		}

		if ( book.text[ i ].toLowerCase( ) === word[ j ] )
		{
			if ( j !== ( word.length - 1 ) )
			{
				j++;

				continue;
			}
			
			indexes.push( i - j );
		}

		j = 0;

		wordStarting = false;
	}

	return indexes;
}

const book = {
	id: 1,
	text: 'Erase una vez un libro de palabras que era un poco aburrido pero tenia muchas'
};

console.log( findWordsStartingWith( book, 'un' ) );