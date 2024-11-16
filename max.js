function getMax(num1,num2){
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}
const max1 = getMax(50,45);
const max2 = getMax(60,42);
const ultimateMax= (max1,max2);
console.log("Max number is : ", ultimateMax);