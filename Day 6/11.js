class User {
  constructor(password) {
    this._password = password;
  }

  set password(value) {
    if (value.length < 6) {
      console.log("Password must be at least 6 characters");
    } else {
      this._password = value;
    }
  }

  get password() {
    return this._password;
  }
}

let user = new User("123456");
user.password = "abcdef";
console.log(user.password);