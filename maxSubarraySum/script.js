/*
Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.
*/

function maxSubarraySum(arr, elNr) {
    if (arr.length < elNr) {
        return null;
    }

    if (arr.length === elNr) {
        return arr.reduce((acc, val) => acc + val, 0);
    }
    let maxSum = arr.slice(0, elNr).reduce((acc, val) => acc + val, 0);
    let temporarySum = maxSum;

    for (let i = elNr; i < arr.length; i++) {
        temporarySum = temporarySum - arr[i - elNr] + arr[i];

        if (temporarySum > maxSum) {
            maxSum = temporarySum;
        }
    }

    return maxSum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([100, 200, 300, 400], 4)); // 1000
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
