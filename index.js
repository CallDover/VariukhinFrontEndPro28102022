let for1 = 'for1: ';
  for (let i = 20; i <= 30; i += 0.5) {
      const num = i === 30 ? `${i};` : `${i},`;
      for1 += num;
  }
  const result1 = document.getElementById('for1');
  result1.innerHTML = for1;

  let for2 = 'for2: ';
  let dollar = 27;
  for (let i = 10; i <= 100; i += 10) {
      const num2 = i === 100 ? `${i*dollar};` : `${i*dollar},`;
      for2 += num2
  }
  const result2 = document.getElementById('for2');
  result2.innerHTML = for2;
  
  let for3 ='for3: ';
  let AnyNumber = 800;
  for (let i = 1; i <= 100; i++) {
    if (i*i <= AnyNumber) {
        const num3 = i === Math.round(Math.sqrt(AnyNumber)) || i === 100 ? `${i*i};` : `${i*i},`;
        for3 += num3;
    }
  const result3 = document.getElementById('for3');
  result3.innerHTML = for3;
  }

  let for4 ='for4: ';
  let naturalNumber = prompt('Write a natural number');
  let numSimple = true
  for (let i = 2; i < naturalNumber; i++) {
    if (naturalNumber % i === 0) {
        numSimple = false;
        break;
    }
  }
  const result4 = document.getElementById('for4');
  result4.innerHTML = for4 + `${naturalNumber} ${numSimple ? 'is simple' : 'isn`t simple'}.`;

  let for5 = 'for5: ';
  let naturalNumber2 = Number(prompt('Enter a number to check if it can be obtained by raising the number 3 to the power'));
  let threeToThePower = false;
  let power;
  for (let i = 1; i < naturalNumber2; i++) {
    if(Math.pow(3, i) === naturalNumber2){
      threeToThePower = true;
      power = i;
      break;
    }
    
  }
  const result5 = document.getElementById('for5');
  result5.innerHTML = for5 + `${naturalNumber2} ${threeToThePower ? `can be obtained by raising the number 3 to the ${power} power` : 'cant be obtained by raising the number 3 to the power'}.`;