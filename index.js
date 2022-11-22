const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(arr, element) {
    
    return arr.filter(function(ele){ 
        return ele != element; 
    });
}

const filteredArray = removeElement(array, 5 );

console.log(filteredArray);