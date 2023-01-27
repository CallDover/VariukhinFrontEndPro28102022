function reverse(str) {
    str = str.toLowerCase().replace(/[^A-Za-z0–9]/g, '');
    return str.split('').reverse().join('');
}

function SingleCharacterPalindrome(str) {
    if (str === reverse(str)){ 
        return 'OK';
        }
    for (let i = 0; i < str.length; i++) {
        let partial = str.substring(0, i) + str.substring(i + 1, str.length);
        let reversed = reverse(partial);
        if (partial === reversed) {
            return 'Remove One';
        }
    }
    return 'Not Possible';
}

const usersPalindrome = prompt('Enter a palindrome or any string: ');
const answer = SingleCharacterPalindrome(usersPalindrome);

console.log(answer);
console.log(SingleCharacterPalindrome("abba")); // "OK"
console.log(SingleCharacterPalindrome("abbaa")); // "Remove One"
console.log(SingleCharacterPalindrome("abbaab")); // "Not Possible"
console.log(SingleCharacterPalindrome("madmam")); // "Remove One"
console.log(SingleCharacterPalindrome("raydarm")); // "Not Possible"
console.log(SingleCharacterPalindrome("hannah")); // "OK"