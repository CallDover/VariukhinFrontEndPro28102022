let arr = [];
let userAdd = true;
do {
    let arrElement = prompt('Add data for array');
    if(arrElement){
        arr.push(arrElement);
    } else{
        userAdd = confirm('Do you want to add more?')
    }
} while (userAdd);
arr.sort((a, b) => a - b);
arr.splice(1,3);
document.getElementById("arr").innerHTML = `Your array: ${arr}`;