// function linearSearch(arr, searchedNr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === searchedNr) return i;
//     }

//     return -1;
// }

// console.log(linearSearch([10, 15, 20, 25, 30], 15)); // 1
// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4)); // 5
// console.log(linearSearch([100], 100)); // 0
// console.log(linearSearch([1, 2, 3, 4, 5], 6)); // -1
// console.log(linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10)); // -1
// console.log(linearSearch([100], 200)); // -1

// //----------------------------------------------

// function binarySearch(arr, val) {
//     let start = 0;
//     let end = arr.length - 1;

//     while (start <= end) {
//         const middle = Math.floor((start + end) / 2);

//         if (arr[middle] === val) {
//             return middle;
//         }
//         if (arr[middle] > val) {
//             end = middle - 1;
//         }

//         if (arr[middle] < val) {
//             start = middle + 1;
//         }
//     }

//     return -1;
// }

// console.log(binarySearch([1, 2, 3, 4, 5], 2)); //1
// console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
// console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
// console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
// console.log(
//     binarySearch(
//         [
//             5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95,
//             96, 98, 99,
//         ],
//         10
//     )
// ); // 2

// //----------------------------------------------

// function binarySearchRecursion(arr, val) {
//     return search(arr, val, 0, arr.length - 1);
// }

// function search(arr, val, start, end) {
//     if (start > end) {
//         return -1;
//     }

//     const middle = Math.floor((start + end) / 2);

//     if (arr[middle] === val) {
//         return middle;
//     }

//     if (arr[middle] > val) {
//         return search(arr, val, start, middle - 1);
//     }

//     if (arr[middle] < val) {
//         return search(arr, val, middle + 1, end);
//     }
// }

// console.log(binarySearchRecursion([1, 2, 3, 4, 5], 2)); //1
// console.log(binarySearchRecursion([1, 2, 3, 4, 5], 3)); // 2
// console.log(binarySearchRecursion([1, 2, 3, 4, 5], 5)); // 4
// console.log(binarySearchRecursion([1, 2, 3, 4, 5], 6)); // -1
// console.log(
//     binarySearchRecursion(
//         [
//             5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95,
//             96, 98, 99,
//         ],
//         10
//     )
// ); // 2

// //----------------------------------------------

function naiveStringSearch(long, short) {
    let matches = 0;
    const shortLength = short.length;

    for (let i = 0; i < long.length; i++) {
        if (long[i] === short[0]) {
            for (let j = 1; j < short.length; j++) {
                if (long[i + j] !== short[j]) {
                    break;
                }
                if (j === short.length - 1) {
                    matches++;
                }
            }
        }
    }

    return matches;
}

console.log(naiveStringSearch('wowomgzomg', 'omg'));
console.log(naiveStringSearch('harold said hahaha in the hamburg', 'ha'));
