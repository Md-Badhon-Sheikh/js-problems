const phones = [
    {name: "Samsunj", price:80000, camera: '12mp', battery: '5000mAp' },
    {name: "Xoami", price:25000, camera: '12mp', battery: '5000mAp' },
    {name: "Oppo", price:28000, camera: '12mp', battery: '5000mAp' },
    {name: "I phone", price:100000, camera: '12mp', battery: '5000mAp' },
    {name: "Walton", price:22000, camera: '12mp', battery: '5000mAp' },
];

function getMin(phones){
    let min = phones[0];
    for(const phone of phones){
        if(phone.price <min.price){
            min = phone;
        }
    }
    return min;
}
const min = getMin(phones);
console.log(min);