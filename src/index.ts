// # can write javascript in typescript
const name1 = "arun";

const address = "Hyderabad";

//  Basic Types

let id: number = 5;
let fullName: string = "Arun Aaryan";
let isAuthor: boolean = true;
let x: any = true;
x = "string";
x = 5;

// Arrays
let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, true, "Arun"];
let names: string[] = ["Arun", "Aaryan"];

//Tuples
let person: [string, number, boolean] = ["Arun Aaryan", 9, true];
// Tuple Array
let personData: [string, number][];
personData = [
  ["Arun Aaryan", 9],
  ["Arun", 9],
];

//Union
let personId: string | number;
personId = 25;
personId = "25";

//Enum

enum Days {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
console.log(Days.Monday);

// Objects

//first way
const User: {
  id: number;
  name: string;
} = {
  id: 9,
  name: "Arun Aaryan",
};
//second way
//declare type
type UserType = {
  id: number;
  name: string;
};

const Arun: UserType = {
  id: 9,
  name: "Arun Aaryan",
};

// Type Assertions
let uid: any = 9;
// first way
let customerId = <number>uid; // want to copy uid but as number
//secon way
let customerId1 = uid as number; // want to copy uid but as number

// Functions
//function with return types
function fullNameGenerator(firstName: string, secondName: string): string {
  //implicitly parameters are any type
  return firstName + " " + secondName;
}
// console.log(fullNameGenerator("Arun", "Aaryan"));

//functions with parameters as union types
function unionFunction(fullName: string, id: string | number): string {
  return `${fullName} - ${id}`;
}
// console.log(unionFunction("Arun Aaryan", 9));

// function with no return type

function printSomething(fullName: string): void {
  console.log(fullName);
}
// console.log(fullName);

// Interfaces

// interface UnionType = number // interface don't work with primitives
interface userInterface {
  // readonly removes dynamic value assignment
  readonly name: string;
  age: number | string;
  // make optional properties with ?
  sex?: string;
}
let arun: userInterface = {
  // age and name are must by default
  name: "Arun Aaryan",
  age: 25,
  // dynamic property assigns are not possible like below
  //   newProperty : 'hello'
};
// arun.name = "someone"

// Interfaces with functions
interface Arithmetic {
  (x: number, y: number): number;
}
// const add: Arithmetic = (x = 'string', y) => x + y; // since x is defined as number
const add: Arithmetic = (x, y) => x + y; // since x is defined as number
// console.log(add(5, "6")); // will yeild error because x and y are number
// console.log(add(5, 6)); // will return 11

// Classes and Interfaces
interface personInterface {
  id: number;
  name: string;
  getName(): string;
}
class Person implements personInterface {
  id;
  name;
  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
    console.log(this);
  }
  getName() {
    return this.name;
  }
}
// const arunP = new Person("Arun Aaryan", 9);
// console.log(arunP.name); will throw error because name is private
// console.log(arunP.getName());

// Sub Classes
class Employee extends Person {
  phone: number;
  constructor(id: number, name: string, phone: number) {
    super(name, id);
    this.phone = phone;
    console.log(this);
  }
}
// const emp1 = new Employee(9, "Arun Aaryan", 347589);
// console.log(emp1.getName());

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items, 9);
}

let numbers = getArray<number>([1, 2, 3, 5]);
let namesArray = getArray<string>(["Arun", "Aaryan"]);
// console.log(numbers);
// console.log(namesArray);
