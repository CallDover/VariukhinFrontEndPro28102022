const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// 1
const positiveNum = (element) => element > 0;

    const filter = array.filter(positiveNum);
    const sum = (arr) => arr.reduce((prevValue, currentValue) => prevValue + currentValue, 0);
 
    console.log(sum(array));
    console.log(sum.length);
// 2

function findMinimal(arr) {
    return Math.min.apply(null, arr);
}
console.log(findMinimal(array));
console.log(array.indexOf(findMinimal(array)));

// 3

function findMax(numArray) {
    return Math.max.apply(null, numArray);
}
console.log(findMax(array));
console.log(array.indexOf(findMax(array)));

// 4

const negativeNum = (element) => element < 0;
const filterBelowZero = array.filter(negativeNum);
console.log(filterBelowZero.length);

// 5

const oddNumbers = (element) => element % 2 !== 0;

const filteredOddNum = array.filter((item) => {
    return positiveNum(item) && oddNumbers(item);
});
console.log(filteredOddNum.length);

//6

const evenNumbers = (element) => element % 2 === 0;

const filteredEvenNum = array.filter((item) => {
    return positiveNum(item) && evenNumbers(item);
});
console.log(filteredEvenNum.length);

//7

console.log(sum(filteredOddNum));

//8

console.log(sum(filteredEvenNum));

//9
const positiveMult = (arr) => arr.reduce((prevValue, currentValue) => prevValue * currentValue, 1);
console.log(positiveMult(array.filter(positiveNum)));

//10

const theHighestElement = findMax(array);
const HighNumArray = array.map((element) => element === theHighestElement ? theHighestElement : 0);
console.log(HighNumArray);