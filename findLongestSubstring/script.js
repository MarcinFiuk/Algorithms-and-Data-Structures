/*
Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
*/

function findLongestSubstring(str) {
    let subStr = str[0];
    let length = 0;

    if (!str.length) {
        return 0;
    }

    for (let i = 1; i < str.length; i++) {
        if (subStr.includes(str[i])) {
            const index = subStr.indexOf(str[i]);
            subStr = subStr.slice(index + 1);
        }

        subStr += str[i];

        length = Math.max(length, subStr.length);
    }

    return length;
}

console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6
