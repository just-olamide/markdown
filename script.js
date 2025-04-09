// - Create a `Book` class with properties `title`, `author`, and `yearPublished`.
// - Add a method `getBookInfo()` that returns a formatted string of the book details.
// - Create multiple book instances and display their information.

class Book {
  constructor(title, author, yearPublished) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
  }
  getBookInfo() {
    return `${this.title} by ${this.author},in ${this.yearPublished}`;
  }
}

const myBook = new Book("Broken", "Fatima Bala", 2023);

const myBook2 = new Book("Things fall apart", "chinue achebe", 1958);

console.table(myBook);
console.table(myBook2);

// step2
//     - Create an `Employee` class with properties `name`, `position`, and `salary`.
// - Add a method `getAnnualSalary()` to return the total salary for a year.
// - Create instances for multiple employees and display their annual salaries.

class Employee {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  getAnnualSalary() {
    // const employee = new Employee;
    return `${this.name} ${this.position} ${this.salary * 12}`;
  }
}

const employee1 = new Employee("Zaynab", "Manager", 500);
console.log(employee1.getAnnualSalary());

const employee2 = new Employee("idris", "HR", 300);
console.log(employee2.getAnnualSalary());

// step3
//     - Create a `Vehicle` class with properties `brand`, `model`, and `year`.
// - Create a `Car` subclass that extends `Vehicle` and adds a new property `fuelType`.
// - Add a method `getCarDetails()` to return the car’s details.
// - Create multiple car instances and display their information.

class Vehicle {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

class Car extends Vehicle {
  constructor(brand, model, year, fuelType) {
    super(brand, model, year);
    this.fuelType = fuelType;
  }
  getCarDetails() {
    return `${this.brand} ${this.model} ${this.year} ${this.fuelType}`;
  }
}

const myCar = new Car("Tesla", "SUV", 2024, "power");
console.table(myCar);

const myCar2 = new Car("G-wagon", "G63", 2023, "fuel");
console.table(myCar2);

// step4
// Online Shopping Cart (Static Methods)
// - Create a `ShoppingCart` class with a static method `calculateTotal(cartItems)`.
// - The method should take an array of item prices and return the total price.
// - Test the static method with different shopping cart values

class ShoppingCart {
  constructor() {}
  calculateTotal(cartItems) {
    let Total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      Total += cartItems[i];
    }

    return `Total: $${Total}`;
  }
}

let cartItems = [100, 300, 400];

const total_cart = new ShoppingCart


// let Total = ShoppingCart.calculateTotal(cartItem);
console.log(total_cart.calculateTotal(cartItems));

// step5
//     - Create a `BankAccount` class with properties `owner`, `balance`, and methods:
//     - `deposit(amount)`: Adds the amount to balance.
//     - `withdraw(amount)`: Deducts the amount from balance (if sufficient funds).
//     - `getBalance()`: Returns the current balance.
//   - Create multiple accounts and perform transactions.

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`Deposited $${amount}. Current balance: $${this.balance}`);
  }
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("insufficient");
    } else {
      this.balance - amount;
      console.log(`Withdraw $${amount}. Current balance: $${this.balance}`);
    }
  }
}

let account = new BankAccount("Lawal Zaynab", 1000);
account.deposit(100);
account.withdraw(200);
account.withdraw(300);
