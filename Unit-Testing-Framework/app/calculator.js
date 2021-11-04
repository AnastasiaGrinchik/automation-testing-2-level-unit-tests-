/**
 *
 *The class containing methods add() and multiply()
 * @class Calculator
 */
class Calculator {
    /**
     *
     *
     * @param {number} numberOne
     * @param {number} numberTwo
     * @return {number} is result of addition the numbers: numberOne and numberTwo
     * @memberof Calculator
     */
    add (numberOne, numberTwo) {
        if (typeof numberOne === 'number' && typeof numberTwo === 'number') {
            return numberOne + numberTwo;
        } else {
            throw new Error('The entered parameters are not numbers');
        }
    }
    /**
     *
     *
     * @param {number} numberOne
     * @param {number} numberTwo
     * @return {number} is result of multiplication the numbers: numberOne and numberTwo
     * @memberof Calculator
     */
    multiply (numberOne, numberTwo) {
        if (typeof numberOne === 'number' && typeof numberTwo === 'number') {
            return numberOne * numberTwo;
        } else {
            throw new Error('The entered parameters are not numbers');
        }
    }
}

module.exports = Calculator;
