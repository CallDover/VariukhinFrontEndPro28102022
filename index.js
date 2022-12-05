//first

const array = [1, 2, 'string', 3, 4, '5'];

const num = (arr) => arr.filter((item) => typeof item === 'number' && !isNaN(item));
const averageNum = (arr) => arr.reduce((prevValue, currentValue) => prevValue + currentValue, 0) / arr.length;
console
console.log(averageNum(num(array)));


//second

const OPERATORS = {
    PLUS: '+',
    MIN: '-',
    MULTY: '*',
    DIV: '/',
    INTEGER_DIV: '%',
    EXP: '^'
};

const operations = {
    [OPERATORS.PLUS]: (a, b) => a + b,
    [OPERATORS.MIN]: (a, b) => a - b,
    [OPERATORS.MULTY]: (a, b) => a * b,
    [OPERATORS.DIV]: (a, b) => {
        if (b === 0) {
            console.log('U can`t divide by 0')
        } 
        return a / b 
    },
    [OPERATORS.INTEGER_DIV]: (a, b) => {
        if (b === 0) {
            console.log('U can`t divide by 0')
        } 
        return a % b 
    },
    [OPERATORS.EXP]: (a, b) => a ** b,
}
 
const doMath = (x, znak, y) => {
    const operation = operations[znak];
    if (operation) {
        return operation(x, y);
    }
    return 'what?';
}

console.log(doMath(10, '+', 10));