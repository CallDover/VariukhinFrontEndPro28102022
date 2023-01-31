function layersOfInheritance(object) {
    let count = 0;
    const firstObj = Object.getPrototypeOf({});
    function recursiveCount(counter, obj) {
        const objectPrototype = Object.getPrototypeOf(obj);
        if (objectPrototype === firstObj) {
            return counter;
        }
        counter += 1;
        return recursiveCount(counter, objectPrototype);
    }
    return recursiveCount(count, object);
}


const obj = { a: 1 };
const obj2 = Object.create(obj);
const obj3 = Object.create(obj2);

console.log(layersOfInheritance({})); // 0
console.log(layersOfInheritance(new Date())); // 1
console.log(layersOfInheritance(obj3)); // 2