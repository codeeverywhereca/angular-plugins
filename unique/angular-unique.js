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
			if( temp.indexOf(arr[x][attr]) == -1 ) {
				temp.push(arr[x][attr]);
			}
		}
		return temp;
	};
});
