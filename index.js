
function sum() {

    let counter = 0;

    const calcul = function(num) {
        counter += num;
        return counter;
    }
    return calcul;
}

const getSum = sum();
const num1 = getSum(3);
const num2 = getSum(5);
const num3 = getSum(20);

console.log(num1, num2, num3);