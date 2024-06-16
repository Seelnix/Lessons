function averageOfNumbers(arr) {
    let sum = 0;
    let count = 0;

    for (let element of arr) {
        if (typeof element === 'number') {
            sum += element;
            count++;
        }
    }

    if (count === 0) {
        return 0;
    }

    return sum / count;
}

let mixedArray = [1, 'hello', 3, true, 5, null, 7, 'world'];
let average = averageOfNumbers(mixedArray);
console.log(average);