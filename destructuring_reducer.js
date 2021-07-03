const products = [
  { price: 20, loyaltyPoints: 10 },
  { price: 30, loyaltyPoints: 15 },
];

const { totalPrice, totalLoyaltyPoints } = products.reduce(
  ({ totalPrice, totalLoyaltyPoints }, product) => {
    totalPrice += product.price;
    totalLoyaltyPoints += product.loyaltyPoints;
    return { totalPrice, totalLoyaltyPoints };
  },
  { totalPrice: 0, totalLoyaltyPoints: 0 }
);

console.log("total price", totalPrice);
console.log("total loyalty points", totalLoyaltyPoints);
