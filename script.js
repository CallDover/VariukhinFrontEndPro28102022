let banana = prompt('How much does a banana cost?', '');
let apple = prompt('How much does a apple cost?', '');
let pear = prompt('How much does a pear cost?', '');

let bananaCost = Number(banana);
let appleCost = Number(apple);
let pearCost = Number(pear);


alert(`Average cost of fruits: ${(bananaCost + appleCost + pearCost)/3}`)