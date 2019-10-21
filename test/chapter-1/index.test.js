var chai = require('chai'),
	assert = chai.assert,
	expect = chai.expect,
	should = chai.should();

var before = require('../../src/chapter-1/before');
var after = require('../../src/chapter-1/after');
var invoices = require('../../assets/invoices');
var plays = require('../../assets/plays');


describe('chapter-1 - before.js', function(){
	it('Should return expected invoice', function(){
		let expectation = 'Statement for BigCo\n Hamlet: $650.00 (55 seats)\n As You Like It: $580.00 (35 seats)\n ' + 
		                  'Othello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits\n';
		expect(before(invoices[0], plays)).to.equal(expectation);
	})
});

describe('chapter-2 - after.js', function(){
	it('Should return expected invoice', function(){
		let expectation = 'Statement for BigCo\n Hamlet: $650.00 (55 seats)\n As You Like It: $580.00 (35 seats)\n ' + 
		                  'Othello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits\n';
		expect(after(invoices[0], plays)).to.equal(expectation);
	})
});