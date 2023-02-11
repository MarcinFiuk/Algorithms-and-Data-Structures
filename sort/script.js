function bubbleSort(arr) {
    let noSwap = true;
    for (let i = arr.length; i > 0; i--) {
        noSwap = true;
        console.log(arr);
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                noSwap = false;
            }
        }
        if (noSwap) {
            break;
        }
    }

    return arr;
}

// console.log(bubbleSort([22, 5, 3, 4, 1, 2]));
console.log(bubbleSort([22, 5, 6, 7, 11, 12]));
