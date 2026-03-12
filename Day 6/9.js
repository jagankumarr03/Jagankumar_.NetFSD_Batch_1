class Product {
  constructor({ name, price, category = "General" }) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  showDetails = () => {
    console.log(`${this.name} costs ₹${this.price} in ${this.category}`);
  };
}

let product = new Product({ name: "Phone", price: 20000 });
product.showDetails();