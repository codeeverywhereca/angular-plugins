/*
 * angular-unique (Dec 5 2016)
 * https://github.com/codeeverywhereca/angular-plugins
 * Copyright 2016, http://codeeverywhere.ca
 * Licensed under the MIT license.
 */

app.filter('unique', function() {
	return function(arr, attr) {
		if( arr === undefined || arr.length == 0 ) return [];
		var temp = [];
		for( var x=0; x<arr.length; x++ ) {			
			var val = ( attr === undefined ) ? arr[x] : arr[x][attr];
			if( temp.indexOf( val ) == -1 ) {
				temp.push( val );
			}
		}
		return temp;
	};
});
