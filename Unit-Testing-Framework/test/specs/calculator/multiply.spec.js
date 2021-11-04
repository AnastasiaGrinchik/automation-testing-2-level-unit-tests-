const { expect } = require('chai');
const Calculator = require('../../../app/calculator.js');

const arrForMultiply = [
    { arg1: 20, arg2: 5, result: 100 },
    { arg1: 0.5, arg2: 0.5, result: 0.25 },
    { arg1: 10, arg2: 2.5, result: 25 },
    { arg1: -5, arg2: -3, result: 15 },
];

describe('Function multiply for Calculator', function () {
    before(function () {
        calc = new Calculator();
    });
    arrForMultiply.forEach(({ arg1, arg2, result }) => {
        it(`should return ${result} when arg1 = ${arg1} and arg2 = ${arg2}`, function () {
            expect(calc.multiply(arg1, arg2)).to.be.equal(result);
        });
    });
    it('should return the error message when at least one of the arguments is not of type "number"', function () {
        expect(() => calc.multiply(1, 'qw')).to.throw(
            'The entered parameters are not numbers'
        );
    });
});
