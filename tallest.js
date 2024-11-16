const heights = [55,58,60,57,65,58,68,50];

function getMax (numbers){
    let max = numbers[0];
    for(const number of numbers){
        if(number>max){
            max=number;
        }
    }
    return max;
}
const tallest = getMax(heights);
console.log(tallest);