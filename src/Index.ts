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
