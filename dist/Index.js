"use strict";
let id = 5;
let company = "hello";
let isModalOpen = true;
let list = [1, 2, 3, 4];
let listArray = [1, 2, 3, 4];
let anything = `anything I want to Write ${company} ${id}`;
let arr = [1, "one", true];
// Tuple
let person = ["John", 23, true];
// Tuple Array
let employee;
employee = [
    [1, "first Name"],
    [2, "Second Name"],
    [3, "third Name"],
];
// console.log(employee);
// ! either string or number it will take
let ids = 22;
ids = "23";
var Directions;
(function (Directions) {
    Directions["up"] = "up";
    Directions["down"] = "down";
    Directions["left"] = "left";
    Directions["right"] = "right";
})(Directions || (Directions = {}));
// console.log(Directions.down);
// console.log(ids);
// console.log(5);
let age;
const user = {
    id: 1,
    name: "String",
};
const p1 = 23;
// console.log(p1);
// console.log(user);
// Type Assertion
let cid = 1;
// let customerId  = <number>cid;
// or
let customerId = cid;
// Function
function addNumber(x, y) {
    return x + y;
}
// console.log(addNumber(1, 2));
// console.log(addNumbers(1,2));
// does not allow hoisting
const addNumbers = (x, y) => x + y;
// console.log(addNumbers(20, 30));
function message(msg) {
    console.log(msg);
}
// Working? means it can be optional
//! readonly id: string; this means you cnt assign value for this id
const user123 = {
    id: "12345",
    age: 26,
    name: "Angkit Hashamsa",
    place: "delhi",
};
user123["Working"] = true;
const addNum = (x, y) => x + y;
const sub = (x, y) => x - y;
// console.log(addNum(1, 3));
// !CLASSES
class Person {
    constructor(name, id, age) {
        this.name = name;
        this.id = id;
        this.age = age;
    }
    register() {
        return `${this.name} is now register`;
    }
}
//! Property 'id' is private and only accessible within class 'Person'.
// ? Property 'age' is protected and only accessible within class 'Person' and its subclasses.
const user1 = new Person("Angkit", 23, 26);
const user2 = new Person("hurray", 25, 30);
class Person2 {
    constructor(name, id, age) {
        this.name = name;
        this.id = id;
        this.age = age;
    }
    register() {
        return `${this.name} is now register`;
    }
}
const user3 = new Person2("Angkit2155", 24, 45);
// console.log(user3);
class Employee extends Person2 {
    constructor(name, id, age, position) {
        super(name, id, age);
        this.position = position;
    }
}
const newEmployee = new Employee("Raul", 34, 25, "Manager");
// console.log(newEmployee);
// * Generics
function getArray(item) {
    return new Array().concat(item);
}
let numArray = getArray([1, 2, 3, 4, 5]);
console.log(numArray);
let stringArray = getArray(["apple", "banana", "carrot"]);
stringArray.push("tiger");
console.log(stringArray);
function getArrayWithType(item) {
    return new Array().concat(item);
}
let numArrayWithType = getArrayWithType([1, 34, 54, 3]);
let stringArrayWithType = getArrayWithType(["one", "two", "three"]);
// stringArrayWithType.push('onetwo')
