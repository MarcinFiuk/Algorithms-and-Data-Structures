/*
Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the total is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
*/

function minSubArrayLen(arr, val) {
    let tempMin = 0;
    let index = 0;
    let total = 0;
    let min = Infinity;

    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
        tempMin++;

        while (total >= val) {
            if (tempMin < min) {
                min = tempMin;
            }

            total -= arr[index];
            index++;
            tempMin--;
        }
    }
    return min === Infinity ? 0 : min;
}

console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
