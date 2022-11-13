
  let for1 = 'for1: ';
  for (let i = 10; i <= 20; i++) {
      const num = i === 20 ? `${i};` : `${i},`;
      for1 += num;
  }
  const result1 = document.getElementById('for1');
  result1.innerHTML = for1;


  let for2 = 'for2: ';
  for (let i = 10; i <= 20; i++) {
      const num2 = i === 20 ? `${i*i};` : `${i*i},`;
      for2 += num2;
  }
  const result2 = document.getElementById('for2');
  result2.innerHTML = for2;


  let for3 = 'for3: \n';
  for (let i = 1; i <= 10; i++) {
      const num3 = `${i} * 7 = ${i*7} \n`;
      for3 += num3;
  }
  const result3 = document.getElementById('for3');
  result3.innerHTML = for3;


  let for4 = 'for4: ';
  let counter4 = 0;
  for (let i = 1; i <= 15; i++) {
    counter4 += i;
  }
  const result4 = document.getElementById('for4');
  result4.innerHTML = for4 + counter4;
 

  let for5 = 'for5: ';
  let counter5 = 0;
  for (let i = 15; i <= 35; i++) {
    counter5 = i * counter5 || i;
  }
  const result5 = document.getElementById('for5');
  result5.innerHTML = for5 + counter5;


  let for6 = 'for6: ';
  let counter6 = 0;
  for (let i = 1; i <= 500; i++) {
    counter6 += i;
  }
  const result6 = document.getElementById('for6');
  result6.innerHTML = for6 + counter6 / 500;


  let for7 = 'for7: ';
  let counter7 = 0;
  for (let i = 30; i <= 80; i+=2) {
    counter7 += i;
  }
  const result7 = document.getElementById('for7');
  result7.innerHTML = for7 + counter7;


  let for8 = 'for8: ';
  const arr = new Array(200);
  for (let i = 100; i <= arr.length; i++) {
      if (i % 3 === 0){
          const num8 = i >= arr.length - 3 ? `${i};` : `${i},`; 
          for8 += num8;
      }
  }
  const result8 = document.getElementById('for8');
  result8.innerHTML = for8;


  let for9 = 'for9: ';
  let naturalNumber = prompt('Write a natural number');
  for (let i = 0; i <= naturalNumber; i++) {
      if (naturalNumber % i === 0){
          const num9 = i === naturalNumber ? `${i};` : `${i},`;
          for9 += num9;
      }
  }
  const result9 = document.getElementById('for9');
  result9.innerHTML = for9;


  let for10 = 'for10: ';
  for (let i = 0; i <= naturalNumber; i++) {
      if (naturalNumber % i === 0 && i % 2 === 0){
          const num10 = i === naturalNumber ? `${i};` : `${i},`;
          for10 += num10;
      }
  }
  const result10 = document.getElementById('for10');
  result10.innerHTML = for10;



  let for11 = 'for11: ';
  let counter11 = 0;
  for (let i = 0; i <= naturalNumber; i++) {
      if (naturalNumber % i === 0 && i % 2 === 0){
        counter11 += i;
      }
  }
  const result11 = document.getElementById('for11');
  result11.innerHTML = for11 + counter11;


  let for12 = 'for12:\n';
  for (let i = 1; i <= 10; i++) {
      const container = document.getElementById(`line-${i}`);
      let table = '';
      for (let k = 1; k <= 10; k++) {
          table += `${i} * ${k} = ${i*k} \n`;
      };
      container.innerHTML = table;
  }
  document.getElementById('for12').prepend(for12);
