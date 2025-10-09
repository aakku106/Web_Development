# Object-Oriented Programming (OOP) in JavaScript

OOP (Object-Oriented Programming) is a programming style focused on organizing code around **objects** — collections of related data (properties) and functions (methods).

JavaScript supports OOP through objects, classes, and prototypes.

---

## 🔹 1. What is OOP?

OOP helps structure your code into reusable, modular units. Each object represents a real-world entity.

**Example:**

```js
const car = {
  brand: 'Tesla',
  model: 'Model 3',
  start: function() {
    console.log(`${this.brand} ${this.model} is starting...`);
  }
};

car.start(); // Tesla Model 3 is starting...
```

---

## 🔹 2. OOP Concepts

JavaScript OOP is built around four main pillars:

### 1️⃣ Encapsulation

Encapsulation means bundling related data and methods inside one unit (object or class) and hiding internal details.

```js
class Person {
  #age; // private property
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  displayInfo() {
    console.log(`${this.name} is ${this.#age} years old.`);
  }
}

const person1 = new Person('Pramish', 13);
person1.displayInfo(); // Pramish is 13 years old.
```

`#age` is **private** — it cannot be accessed outside the class.

---

### 2️⃣ Inheritance

Inheritance allows one class to use properties and methods from another.

```js
class Animal {
  speak() {
    console.log('This animal makes a sound.');
  }
}

class Dog extends Animal {
  speak() {
    console.log('The dog barks.');
  }
}

const dog = new Dog();
dog.speak(); // The dog barks.
```

Here, `Dog` **inherits** from `Animal` and overrides the `speak()` method.

---

### 3️⃣ Polymorphism

Polymorphism means using the same method name for different behaviors.

```js
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const shapes = [new Circle(3), new Rectangle(4, 5)];

shapes.forEach(shape => console.log(shape.area()));
// Output:
// 28.274...
// 20
```

Each class defines `area()` differently — that’s **polymorphism**.

---

### 4️⃣ Abstraction

Abstraction hides unnecessary details and shows only essential features.

In JavaScript, this is achieved using **classes** and **methods**, where you expose only what’s needed.

```js
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return `Your balance is Rs. ${this.#balance}`;
  }
}

const acc = new BankAccount();
acc.deposit(5000);
console.log(acc.getBalance()); // Your balance is Rs. 5000
```

---

## 🔹 3. Constructor in JavaScript

A **constructor** is a special method used to initialize an object when it’s created.

```js
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  info() {
    console.log(`${this.name} is in grade ${this.grade}`);
  }
}

const s1 = new Student('Pramish', 8);
s1.info(); // Pramish is in grade 8
```

---

## 🔹 4. Class vs Object

* **Class**: Blueprint (design)
* **Object**: Instance (real item)

```js
class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }
}

const car1 = new Car('Toyota', 2020);
const car2 = new Car('Honda', 2021);
```

`Car` is the **class**, `car1` and `car2` are **objects**.

---

## 🔹 5. Using `this` keyword

`this` refers to the **current object**.

```js
class Phone {
  constructor(model) {
    this.model = model;
  }

  show() {
    console.log(`Phone model: ${this.model}`);
  }
}

const p = new Phone('iPhone 15');
p.show(); // Phone model: iPhone 15
```

---

## 🔹 6. OOP Summary Table

| Concept       | Description                 | Example Keyword     |
| ------------- | --------------------------- | ------------------- |
| Encapsulation | Grouping data & methods     | `class`, `#private` |
| Inheritance   | Deriving new class from old | `extends`           |
| Polymorphism  | Same method, different form | `override`          |
| Abstraction   | Hide complexity             | `class`, `method`   |
| Constructor   | Initialize object           | `constructor()`     |

---


✅ **Conclusion:**
OOP in JavaScript makes code modular, reusable, and easier to maintain. Classes and objects form the foundation for scalable applications.
