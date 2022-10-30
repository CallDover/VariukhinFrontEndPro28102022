let strMathNum1 = prompt('I can calculate your numbers: Write number 1!', '');
let strMathNum2 = prompt('And write number 2!','');

let mathNumber1 = Number(strMathNum1);
let mathNumber2 = Number(strMathNum2);

if(mathNumber2 !== 0){
alert(`Your result:
    sum:${mathNumber1+mathNumber2}
    sub:${mathNumber1-mathNumber2}
    mult:${mathNumber1*mathNumber2}
    div:${mathNumber1/mathNumber2}`)
 }else if(mathNumber2 === 0){
    alert(`Your result:
    sum:${mathNumber1+mathNumber2}
    sub:${mathNumber1-mathNumber2}
    mult:${mathNumber1*mathNumber2}
    div:ERROR`)
} 