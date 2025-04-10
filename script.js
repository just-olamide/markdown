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

console.log(myBook.getBookInfo());
console.log(myBook2.getBookInfo());

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
console.log(myCar.getCarDetails());

const myCar2 = new Car("G-wagon", "G63", 2023, "fuel");
console.log(myCar2.getCarDetails());

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
    if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`${amount} withdrawn. New balance: $${this.balance}`);
        
    } else {
      
      console.log("insufficient funds");
    }
  }
}

let account1 = new BankAccount("Lawal Zaynab", 1000);
account1.deposit(100);
account1.withdraw(200);
// console.log(account1.getBalance());

class Device {
  constructor(brand, model, year){
this.brand = brand;
this.model = model;
this.year = year;
  }
  getDeviceInfo(){
    retun `${this.brand} ${this.model} ${this.year}`;
  }
}
class Smartphone extends Device{
  constructor(brand,model,year,os){
    super(brand,model,year);
this.os = os;
  }
}
const myPhone = new Smartphone("Iphone", "15promax", 2023,"os 15")
console.table(myPhone);

// step7
class Person {
  constructor(name, age){
this.name = name;
this.age = age;
  }
  getDetails(){
    return `${this.name} ${this.age}`;
  }
}
class Student extends Person {
  constructor (name, age, course, grade){
super(name,age);
this.course = course;
this.grade = grade;
  }
  getStudentInfo(){
    return `${this.name} ${this.age} ${this.course} ${this.grade}`;
  }
}

const student1 = new Student ("Zaynab",20,"Biochemistry",4.0);
console.log(student1.getStudentInfo());

// step8

class Order {
  constructor(orderId,customerName){
    this.orderId = orderId;
    this.customerName = customerName;
  }
  getOrderDetails(){
    return `${this.orderId} ${this.customerName}`;
  }
}
class ProductOrder extends Order {
  constructor(orderId,customerName,productName,price){
super(orderId,customerName);
this.productName = productName;
this.price = price;
  }
  getProductOrder(){
    return `${this.orderId} ${this.customerName} ${this.productName} ${this.price}`;
  }
}

const product = new ProductOrder (123, "Zaynab", "pizza", 300);
console.log(product.getProductOrder());


