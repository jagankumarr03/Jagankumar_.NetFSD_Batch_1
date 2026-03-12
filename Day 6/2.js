class BankAccount {
  constructor(accountHolder, balance = 0) {
    this.accountHolder = accountHolder;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`₹${amount} deposited successfully.`);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient balance!");
    } else {
      this.balance -= amount;
      console.log(`₹${amount} withdrawn successfully.`);
    }
  }

  checkBalance() {
    console.log(`Current Balance: ₹${this.balance}`);
  }
}

let acc = new BankAccount("Rahul", 10000);
acc.deposit(2000);
acc.withdraw(5000);
acc.checkBalance();