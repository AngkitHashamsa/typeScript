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

// console.log(user);
