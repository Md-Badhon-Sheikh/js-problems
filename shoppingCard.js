const products = [
    { name:' shampoo', price: 5, quantity: 10 },
    { name: 'shope', price: 50, quantity: 1 },
    { name: 'biscuit', price: 30, quantity: 2 },
    { name: 'cock', price: 50, quantity: 4 },
];

function getShopping(products) {
    let total = 0;
    for(const product of products){
        const price = product.price * product.quantity;
        total = total + price;
    }
    return total;
}
const totalPrice = getShopping(products);
console.log("Total Price : ", totalPrice);