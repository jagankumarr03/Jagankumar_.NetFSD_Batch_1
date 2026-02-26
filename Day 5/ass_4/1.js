let books = [
  { id: 1, title: "JavaScript Basics", price: 450, stock: 10 },
  { id: 2, title: "React Guide", price: 650, stock: 5 },
  { id: 3, title: "Node.js Mastery", price: 550, stock: 8 },
  { id: 4, title: "CSS Complete", price: 300, stock: 12 }
];

let cart = [
  { id: 2, quantity: 2 }, 
  { id: 4, quantity: 1 }  
];

let invoiceItems = cart.map(item => {
  let book = books.find(b => b.id === item.id);

  return {
    title: book.title,
    price: book.price,
    quantity: item.quantity,
    total: book.price * item.quantity
  };
});

let totalBill = invoiceItems.reduce((sum, item) => {
  return sum + item.total;
}, 0);

let invoice = invoiceItems
  .map(item => 
    item.title + " x " + item.quantity +
    " = ₹" + item.total
  )
  .join("\n");

console.log("----- INVOICE -----");
console.log(invoice);
console.log("-------------------");
console.log("Total Bill: ₹" + totalBill);