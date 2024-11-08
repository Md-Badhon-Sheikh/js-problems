function oddAverage(numbers) {
    // console.log(numbers);
    const odd =[];
    for(number of numbers){
        if(number %2 == 1){
           odd.push(number);
        }
    }
    // console.log(odd);
    let sum =0;
    const oddLength = odd.length;
    for(number of odd){
        sum = sum + number;
    }
    // console.log(sum);
    // console.log(oddLength);
    const average = sum / oddLength;
    return average;
    
}
const array = [10, 15, 55, 25, 88, 99, 37, 52, 63];
const average = oddAverage(array);
console.log("Average : ", average);