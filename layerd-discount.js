/*
*first 100 price 100tk
* second 100 price 90tk
* Third 100+ price 70tk
*/

function discountPrice(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const upTo200Price = 70;

    if (quantity <= 100) {
        totalPrice = first100Price * quantity;
        return totalPrice;
    }
    else if (quantity > 100 && quantity <= 200) {

        const first100Total = first100Price * 100;
        const remainingQuantity = quantity - 100;
        const remainingTotal = remainingQuantity * second100Price;
        const totalPrice = first100Total + remainingTotal;
        return totalPrice;
    }
    else {
        const first100Total = first100Price * 100;
        const second100Total = second100Price * 100;
        const remainingQuantity = quantity - 200;
        const remainingTotal = upTo200Price * remainingQuantity;
        const totalPrice = first100Total + second100Total + remainingTotal;
        return totalPrice;
    }
}
const price = discountPrice(300);
console.log("Total Price is : ", price);