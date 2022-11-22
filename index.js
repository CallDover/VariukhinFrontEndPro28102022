const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, symbols) {
    let result = "";
    while (result.length < length) {
        let random = Math.floor(Math.random() * symbols.length);
        result += symbols[random];
    }
    return result;
}

const key = generateKey(16, characters);
console.log(key); 