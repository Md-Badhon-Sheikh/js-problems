function oddAverage(numbers) {
    let odd = [];
    for (number of numbers) {
        if (number % 2 === 1) {
            odd.push(number);
        }
    }
    let sum = 0;
    const oddLength = odd.length;

    for (number of odd) {
        sum = sum + number;
    }
    // console.log(sum);
    const average = sum / oddLength;
    return average;

}

const array = [10, 15, 16, 18, 19, 55, 77, 63, 52];
const average = oddAverage(array);
console.log(average);