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

//------------------------------------------------

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            } else {
                break;
            }
        }
    }
    return arr;
}

//first arr[j]=22 arr[i]=5

console.log(insertionSort([22, 5, 6, 7, 11, -5, 11, 12]));
