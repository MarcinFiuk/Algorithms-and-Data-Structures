// function bubbleSort(arr) {
//     let noSwap = true;
//     for (let i = arr.length; i > 0; i--) {
//         noSwap = true;
//         for (let j = 0; j < i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//                 noSwap = false;
//             }
//         }
//         if (noSwap) {
//             break;
//         }
//     }

//     return arr;
// }

// console.log(bubbleSort([22, 5, 3, 4, 1, 2]));
// console.log(bubbleSort([22, 5, 6, 7, 11, 12]));

//---------------------------------------------

// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let minValIndex = i;

//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minValIndex]) {
//                 minValIndex = j;
//             }
//         }

//         if (minValIndex !== i) {
//             [arr[i], arr[minValIndex]] = [arr[minValIndex], arr[i]];
//         }
//     }

//     return arr;
// }

// console.log(selectionSort([22, 5, 6, 7, 11, -5, 11, 12]));

//---------------------------------------------

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         for (let j = i; j > 0; j--) {
//             if (arr[j] < arr[j - 1]) {
//                 [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
//             } else {
//                 break;
//             }
//         }
//     }
//     return arr;
// }

// console.log(insertionSort([22, 5, 6, 7, 11, -5, 11, 12]));

//---------------------------------------------

// function merge(arr1, arr2) {
//     const arr = [];
//     let i = 0;
//     let j = 0;
//     while (i < arr1.length && j < arr2.length) {
//         if (arr1[i] < arr2[j]) {
//             arr.push(arr1[i]);
//             i++;
//         } else {
//             arr.push(arr2[j]);
//             j++;
//         }
//     }

//     while (i < arr1.length) {
//         arr.push(arr1[i]);
//         i++;
//     }
//     while (j < arr2.length) {
//         arr.push(arr2[j]);
//         j++;
//     }

//     return arr;
// }

// function mergeSort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }
//     const mid = Math.floor(arr.length / 2);
//     const arr1 = mergeSort(arr.slice(0, mid));
//     const arr2 = mergeSort(arr.slice(mid));

//     return merge(arr1, arr2);
// }

// console.log(mergeSort([3, 5, 11, 8, 2, 65, 7, 90, 1]));

//---------------------------------------------

// function swap(arr, idx1, idx2) {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// }

// function splitByPivot(arr, start = 0, end = arr.length - 1) {
//     const pivot = arr[start];
//     let pivotIndex = start;

//     for (let i = start + 1; i <= arr.length; i++) {
//         if (pivot > arr[i]) {
//             pivotIndex++;
//             swap(arr, pivotIndex, i);
//         }
//     }
//     swap(arr, pivotIndex, start);

//     return pivotIndex;
// }

// function quickSort(arr, left = 0, right = arr.length - 1) {
//     if (left < right) {
//         const pivotIndex = splitByPivot(arr, left, right);
//         quickSort(arr, left, pivotIndex - 1);
//         quickSort(arr, pivotIndex + 1, right);
//     }

//     return arr;
// }

// function quickSort2(arr) {
//     if (arr <= 1) {
//         return arr;
//     }

//     const pivot = arr[0];
//     const leftArr = [];
//     const rightArr = [];

//     for (let i = 1; i < arr.length; i++) {
//         if (pivot > arr[i]) {
//             leftArr.push(arr[i]);
//         } else {
//             rightArr.push(arr[i]);
//         }
//     }

//     return [...leftArr, pivot, ...rightArr];
// }

// console.log(quickSort([18, 9, 31, 12, 66]));
// console.log(quickSort2([18, 9, 31, 12, 66]));

//---------------------------------------------

function getDigit(num, place) {
    const digit = Math.floor((Math.abs(num) / Math.pow(10, place)) % 10);

    return digit;
}

// console.log(getDigit(12345, 2));

function digitCount(num) {
    if (num === 0) {
        return 1;
    }

    const numOfDigit = Math.floor(Math.log10(Math.abs(num))) + 1;

    return numOfDigit;
}

// console.log(digitCount(12345));

function getMostDigits(nums) {
    let maxDigit = 0;

    for (let i = 0; i < nums.length; i++) {
        maxDigit = Math.max(digitCount(nums[i]), maxDigit);
    }

    return maxDigit;
}

// console.log(mostDigit([11, 22, 11111, 11, 1]));

function radixSort(arr) {
    const maxDigitsCount = getMostDigits(arr);

    for (let i = 0; i < maxDigitsCount; i++) {
        const bucket = Array.from({ length: 10 }, () => []);

        for (let j = 0; j < arr.length; j++) {
            const digit = getDigit(arr[j], i);

            bucket[digit].push(arr[j]);
        }

        arr = bucket.reduce((acc, cur) => acc.concat(cur), []);
        // arr = [].concat(...bucket);
    }

    return arr;
}

console.log(radixSort([2, 55, 4, 3, 77, 89, 101, 45, 1000]));
