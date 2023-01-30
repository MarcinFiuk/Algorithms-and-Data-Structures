/**Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. */

function areThereDuplicates(...args) {
    const frequency = {};

    for (const val of args) {
        if (frequency[val]) {
            return true;
        }
        frequency[val] = 1;
    }

    return false;
}

// function areThereDuplicates() {
//     return new Set(arguments).size !== arguments.length;
// }

console.log(areThereDuplicates(1, 2, 3)); //false
console.log(areThereDuplicates(1, 2, 2)); //true
console.log(areThereDuplicates(1, 10, 2, 4, 4, 6, 7, 9)); //true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); //true
