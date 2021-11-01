const Calculator = require('../../../app/calculator.js');
const { expect } = require('chai');

describe('is multiply positive case', function () {
    let numbers;
    beforeEach(function () {
        numbers = new Calculator();
    });
    afterEach(function () {
        numbers = null;
    });
    it('should return the result of multiplication when adding two integers', function () {
        expect(numbers.multiply(20, 5)).to.be.equal(100);
    });
    it('should return  the result of multiplication of two fractional numbers ', function () {
        expect(numbers.multiply(0.5, 0.5)).to.be.equal(0.25);
    });
    it('should return  the result of multiplication when one argument is an integer and the other is fractional', function () {
        expect(numbers.multiply(10, 2.5)).to.be.equal(25);
    });
    it('should return  the result of multiplication, which will be positive if the two arguments are negative numbers', function () {
        expect(numbers.multiply(-5, -3)).to.be.equal(15);
    });
});

describe('is multiply negative case', function () {
    beforeEach(function () {
        numbers = new Calculator();
    });
    afterEach(function () {
        number = null;
    });
    it('should return the NaN if the first argument is "string" and the second is "number" ', function () {
        expect(numbers.multiply('qw', 2)).to.be.NaN;
    });
    it('should return the NaN if the first argument is "number" and the second is "string"', function () {
        expect(numbers.multiply(2, 'qw')).to.be.NaN;
    });
    it('should return the NaN if both arguments are of type "string"', function () {
        expect(numbers.multiply('Ivan', 'Ivanov')).to.be.NaN;
    });
    it('should return the result of multiplication, if the first argument is a "number" and the second is "boolean" false (false = 0)', function () {
        expect(numbers.multiply(10, false)).to.be.equal(0);
    });
    it('should return the result of multiplication if the first argument is a "boolean" false (false = 0) and the second is "number"', function () {
        expect(numbers.multiply(false, 12)).to.be.equal(0);
    });
    it('should return the result of multiplication if the first argument is a "number" and the second is "boolean" true (true = 1)', function () {
        expect(numbers.multiply(20, true)).to.be.equal(20);
    });
    it('should return the result of multiplication if the first argument is a "boolean" true (true = 1) and the second is "number"', function () {
        expect(numbers.multiply(true, 15)).to.be.equal(15);
    });
    it('should return the result of multiplication if both arguments are boolean (false converts to 0, true to 1) ', function () {
        expect(numbers.multiply(false, true)).to.be.equal(0);
    });
    it('should return the result of multiplication if the first argument is a number of the "string" type and the second of the "number" type', function () {
        expect(numbers.multiply('2', 5)).to.be.equal(10);
    });
    it('should return the result of multiplication if the first argument is a "number" type and the second is a number of the "string" type', function () {
        expect(numbers.multiply(10, '7')).to.be.equal(70);
    });
    it('should return the result of multiplication if both arguments are represented by a number of type "string"', function () {
        expect(numbers.multiply('50', '4')).to.be.equal(200);
    });
});
