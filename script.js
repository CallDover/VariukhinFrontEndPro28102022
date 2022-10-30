// Ask users data
let userChoise = prompt('what do you want? Write add, sub, mult or div', '');
let stringCalcNum1 = prompt('Write number 1', '');
let stringCalcNum2 = prompt('Write number 2', '');
//Str to num
let calcNum1 = Number(stringCalcNum1);
let calcNum2 = Number(stringCalcNum2);
//calculations
if (userChoise === 'add'){
    alert(`Calculation result is: ${calcNum1+calcNum2}`)
}else if(userChoise === 'sub'){
    alert(`Calculation result is: ${calcNum1-calcNum2}`)
}else if(userChoise === 'mult'){
    alert(`Calculation result is: ${calcNum1*calcNum2}`)
}else if(userChoise === 'div'){
    alert(`Calculation result is: ${calcNum1/calcNum2}`)
}else{
    alert('Error')
}