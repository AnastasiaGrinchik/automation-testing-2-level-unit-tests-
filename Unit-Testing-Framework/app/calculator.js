/**
 *
 *The class containing methods add() and multiply()
 * @class Calculator
 */
class Calculator {
    /**
     * Creates an instance of Calculator.
     * @param {number} numberOne is first number
     * @param {number} numberTwo is second number
     * @memberof Calculator
     */
    constructor(numberOne, numberTwo) {
        this.numberOne = numberOne;
        this.numberTwo = numberTwo;
    }

    /**
     *
     *
     * @param {number} numberOne
     * @param {number} numberTwo
     * @return {number} is addition  of numbers: numberOne and numberTwo
     * @memberof Calculator
     */
    add(numberOne, numberTwo) {
        return numberOne + numberTwo;
    }

    /**
     *
     *
     * @param {number} numberOne
     * @param {number} numberTwo
     * @return {number} is mupliply of numbers: numberOne and numberTwo
     * @memberof Calculator
     */
    multiply(numberOne, numberTwo) {
        return numberOne * numberTwo;
    }
}

module.exports = Calculator;
