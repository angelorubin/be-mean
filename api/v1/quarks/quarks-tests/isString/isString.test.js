'use strict';

const expect = require('chai').expect,
	  ValuesTRUE = ['Angelo', '1', '', 'true'],
	  ValuesFALSE = [1, null, undefined, true, {}, () => {}];

describe('isString', () => {
	describe('é String', () => {
		ValuesTRUE.forEach( (e, i) => {
			it('Testando: ' + e, () => {
				expect(require('./isString')(e)).to.equal(true);
			})
		});
	});
	describe('não é String', () => {
		ValuesFALSE.forEach( (e, i) => {
			it('Testando: ' + e, () => {
				expect(require('./isString')(e)).to.equal(false);
			})
		});
	});
});