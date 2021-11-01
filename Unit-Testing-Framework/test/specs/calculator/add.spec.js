const Calculator = require('../../../app/calculator.js');
const { expect } = require('chai');

describe('is addition positive case', function () {
    let numbers;
    beforeEach(function () {
        numbers = new Calculator();
    });
    afterEach(function () {
        numbers = null;
    });
    it('should return the sum when adding two integers', function () {
        expect(numbers.add(2, 8)).to.be.equal(10);
    });
    it('should return the sum of two fractional numbers ', function () {
        expect(numbers.add(0.5, 0.6)).to.be.equal(1.1);
    });
    it('should return the sum when one argument is an integer and the other is fractional ', function () {
        expect(numbers.add(10, 2.5)).to.be.equal(12.5);
    });
    it('should return the sum, which will be negative if the two arguments are negative numbers', function () {
        expect(numbers.add(-5, -5)).to.be.equal(-10);
    });
});

describe('is addition negative case', function () {
    beforeEach(function () {
        numbers = new Calculator();
    });
    afterEach(function () {
        number = null;
    });
    it('should return the sum as a concatenation if the first argument is "string" and the second is a "number"', function () {
        expect(numbers.add('qw', 2)).to.be.equal('qw2');
    });
    it('should return the sum as a concatenation if the first argument is "number" and the second is a "string"', function () {
        expect(numbers.add(2, 'qw')).to.be.equal('2qw');
    });
    it('should return the sum as concatenation if both arguments are of type "string"', function () {
        expect(numbers.add('Ivan', 'Ivanov')).to.be.equal('IvanIvanov');
    });
    it('should return the sum if the first argument is a "number" and the second is "boolean" false (false = 0)', function () {
        expect(numbers.add(10, false)).to.be.equal(10);
    });
    it('should return the sum if the first argument is a "boolean" false (false = 0) and the second is "number"', function () {
        expect(numbers.add(false, 12)).to.be.equal(12);
    });
    it('should return the sum if the first argument is a "number" and the second is "boolean" true (true = 1)', function () {
        expect(numbers.add(20, true)).to.be.equal(21);
    });
    it('should return the sum if the first argument is a "boolean" true (true = 1) and the second is "number"', function () {
        expect(numbers.add(true, 15)).to.be.equal(16);
    });
    it('should return the sum if both arguments are boolean (false converts to 0, true to 1) ', function () {
        expect(numbers.add(false, true)).to.be.equal(1);
    });
});
