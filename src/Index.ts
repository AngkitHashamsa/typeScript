let id: number = 5;

let company: string = "hello";

let isModalOpen: boolean = true;

let list: number[] = [1, 2, 3, 4];

let listArray: Array<number> = [1, 2, 3, 4];

let anything: any = `anything I want to Write ${company} ${id}`;

let arr: any[] = [1, "one", true];

// Tuple
let person: [string, number, boolean] = ["John", 23, true];

// Tuple Array
let employee: [number, string][];

employee = [
  [1, "first Name"],
  [2, "Second Name"],
  [3, "third Name"],
];
// console.log(employee);
// ! either string or number it will take
let ids: string | number = 22;
ids = "23";

enum Directions {
  up = "up",
  down = "down",
  left = "left",
  right = "right",
}
// console.log(Directions.down);

// console.log(ids);

// console.log(5);
let age: number;

// age = 25;
// console.log(25);
// listArray.push(5);
// console.log(list);
// console.log(listArray);
// !objects
type User = {
  id: number;
  name: string;
};
const user: User = {
  id: 1,
  name: "String",
};
// Type
type Point = number | string;
const p1: Point = 23;
// console.log(p1);
// console.log(user);

// Type Assertion
let cid: any = 1;
// let customerId  = <number>cid;
// or
let customerId = cid as number;

// Function

function addNumber(x: number, y: number): number {
  return x + y;
}

// console.log(addNumber(1, 2));

// console.log(addNumbers(1,2));
// does not allow hoisting
const addNumbers = (x: number, y: number): number => x + y;
// console.log(addNumbers(20, 30));

function message(msg: string | boolean | number): void {
  console.log(msg);
}

// message(true);

interface User123 {
  readonly id: string;
  age: number;
  name: string;
  place: string;
  Working?: boolean;
}
// Working? means it can be optional
//! readonly id: string; this means you cnt assign value for this id

const user123: User123 = {
  id: "12345",
  age: 26,
  name: "Angkit Hashamsa",
  place: "delhi",
};
user123["Working"] = true;
//! user123.id = "273437373"; you cant assign value for id
// console.log(user123);

interface MathFunc {
  (x: number, y: number): number;
}
const addNum: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;
// console.log(addNum(1, 3));

// !CLASSES

class Person {
  private id: number;
  name: string;
  protected age: number;
  constructor(name: string, id: number, age: number) {
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
//! user1.id = 12343434; we wont be able to assign
// console.log(user1, user2);
// console.log(user1.id); we cant acces id as it is priavte
// user1.id === 234;
// console.log(Object.keys(brad));
// console.log(user1.register());

interface PersonInterface {
  id: number;
  name: string;
  age: number;
  register(): string;
}
class Person2 implements PersonInterface {
  id: number;
  name: string;
  age: number;
  constructor(name: string, id: number, age: number) {
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
  position: string;
  constructor(name: string, id: number, age: number, position: string) {
    super(name, id, age);
    this.position = position;
  }
}
const newEmployee = new Employee("Raul", 34, 25, "Manager");
// console.log(newEmployee);

// * Generics

function getArray(item: any[]): any[] {
  return new Array().concat(item);
}

let numArray = getArray([1, 2, 3, 4, 5]);
console.log(numArray);
let stringArray = getArray(["apple", "banana", "carrot"]);
stringArray.push("tiger");
console.log(stringArray);

function getArrayWithType<T>(item: T[]): T[] {
  return new Array().concat(item);
}

let numArrayWithType = getArrayWithType<number>([1, 34, 54, 3]);
let stringArrayWithType = getArrayWithType<string>(["one", "two", "three"]);
// stringArrayWithType.push('onetwo')
