/**Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits. */

function sameFrequency(nr1, nr2) {
    const nr1Arr = nr1.toString().split('');
    const nr2Arr = nr2.toString().split('');

    if (nr1Arr.length !== nr2Arr.length) {
        return false;
    }

    const frequencyObj1 = nr1Arr.reduce((acc, nr) => {
        acc[nr] = (acc[nr] || 0) + 1;
        return acc;
    }, {});

    for (const val of nr2Arr) {
        if (!frequencyObj1[val]) {
            return false;
        }

        frequencyObj1[val] = frequencyObj1[val] - 1;
    }

    return true;
}

console.log(sameFrequency(182, 281)); //true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); //true
console.log(sameFrequency(22, 222)); //false
