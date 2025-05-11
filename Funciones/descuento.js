function calculatedDiscountedPrice (price, discountPercentage){
    const discount = (price * discountPercentage)/100
    const priceWithDiscount = price - discount

    return priceWithDiscount;
}

const originalPrice = 100
const discountPercentage = 20
const finalPrice = calculatedDiscountedPrice(originalPrice, discountPercentage)

console.log('Original Pricee: $' + originalPrice)
console.log('Discount: ' + discountPercentage + '%')
console.log('Final Price: $' + finalPrice)