let cart = [
  { id: 1, product: "Laptop", price: 60000, qty: 1 },
  { id: 2, product: "Headphones", price: 2000, qty: 2 },
  { id: 3, product: "Mouse", price: 800, qty: 1 }
];

console.log("===== SHOPPING CART MANAGEMENT =====");


let totalCartValue = cart.reduce((total, item) => {
  return total + (item.price * item.qty);
}, 0);

console.log("Total Cart Value: ₹" + totalCartValue);


let updatedCart = cart.map(item => {
  if (item.id === 1) {
    return { ...item, qty: item.qty + 1 };
  }
  return item;
});

console.log("After Increasing Quantity:", updatedCart);


let cartAfterRemoval = cart.filter(item => item.id !== 3);

console.log("After Removing Product:", cartAfterRemoval);


let discountedCart = cart.map(item => {
  if (item.price > 10000) {
    return { ...item, price: item.price * 0.9 };
  }
  return item;
});

console.log("After Applying Discount:", discountedCart);


let sortedCart = [...cart].sort((a, b) => {
  return (a.price * a.qty) - (b.price * b.qty);
});

console.log("Sorted Cart (Low → High Total Price):", sortedCart);


let expensiveProduct = cart.some(item => item.price > 50000);

console.log("Any product above ₹50,000?", expensiveProduct);


let allInStock = cart.every(item => item.qty > 0);

console.log("All items in stock?", allInStock);


console.log("===== END =====");