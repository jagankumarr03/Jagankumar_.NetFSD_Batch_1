class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  start() {
    console.log(`${this.brand} is starting...`);
  }
}

class Car extends Vehicle {
  constructor(brand, speed, fuelType) {
    super(brand, speed);
    this.fuelType = fuelType;
  }

  showDetails() {
    console.log(`${this.brand} runs at ${this.speed} km/h using ${this.fuelType}`);
  }
}

let car1 = new Car("Toyota", 180, "Petrol");
car1.start();
car1.showDetails();