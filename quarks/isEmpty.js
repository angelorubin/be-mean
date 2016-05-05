'use strict';

module.exports = (value) => {

	const isNull = (value === null),
		  isUndefined = (value === undefined),
		  isEmpty = (value === '');
	
	if(isNull || isUndefined || isEmpty) return true;

	return false;
}