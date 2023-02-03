/*
Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
*/

function isSubsequence(str1, str2) {
    let pointer = 0;

    for (let i = 0; i < str2.length; i++) {
        if (str1[pointer] === str2[i]) {
            pointer++;
        }

        if (pointer >= str1.length) {
            return true;
        }
    }
    return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
console.log(isSubsequence('', 'acb')); // true
