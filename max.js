function getMax(num1,num2){
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}
const max = getMax(50,45);
console.log("Max number is : ", max);