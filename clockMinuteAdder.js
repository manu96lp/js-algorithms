/**
 * Dada una hora en string en formato HH:MM, y un número de minutos. Devolver la nueva hora pasados esos minutos.
 */

function clockMinuteAdder( time, minutesToAdd )
{
	let [ hour, minute ] = time.split( ":" );
	
	hour = ( ( parseInt( hour ) + ( minutesToAdd / 60 ) | 0 ) % 12 ) || 12;
	minute = parseInt( minute ) + ( minutesToAdd % 60 ) | 0;
	
	return ( ( hour < 10 ) ? "0" + hour : hour ) + ":" + ( ( minute < 10 ) ? "0" + minute : minute );
}

console.log( clockMinuteAdder( "09:00", 239 ) ); // 12:59
console.log( clockMinuteAdder( "09:00", 240 ) ); // 01:00