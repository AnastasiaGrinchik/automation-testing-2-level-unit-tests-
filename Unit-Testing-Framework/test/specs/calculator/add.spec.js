const { expect } = require('chai');
const Calculator = require('../../../app/calculator.js');

const arrForAdd = [
    { arg1: 2, arg2: 8, result: 10 },
    { arg1: 0.5, arg2: 0.6, result: 1.1 },
    { arg1: 10, arg2: 2.5, result: 12.5 },
    { arg1: -5, arg2: -5, result: -10 },
];

describe('Function add for Calculator', function () {
    let calc;
    before(function () {
        calc = new Calculator();
    });
    arrForAdd.forEach(({ arg1, arg2, result }) => {
        it(`should return ${result} when arg1 = ${arg1} and arg2 = ${arg2}`, function () {
            expect(calc.add(arg1, arg2)).to.be.equal(result);
        });
    });
    it('should return the error message when at least one of the arguments is not of type "number"', function () {
        expect(() => calc.add(1, '2')).to.throw(
            'The entered parameters are not numbers'
        );
    });
});
