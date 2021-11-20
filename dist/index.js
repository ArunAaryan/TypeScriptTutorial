"use strict";
// # can write javascript in typescript
const name1 = "arun";
const address = "Hyderabad";
//  Basic Types
let id = 5;
let fullName = "Arun Aaryan";
let isAuthor = true;
let x = true;
x = "string";
x = 5;
// Arrays
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, "Arun"];
let names = ["Arun", "Aaryan"];
//Tuples
let person = ["Arun Aaryan", 9, true];
// Tuple Array
let personData;
personData = [
    ["Arun Aaryan", 9],
    ["Arun", 9],
];
//Union
let personId;
personId = 25;
personId = "25";
//Enum
var Days;
(function (Days) {
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
    Days[Days["Sunday"] = 7] = "Sunday";
})(Days || (Days = {}));
console.log(Days.Monday);
// Objects
//first way
const User = {
    id: 9,
    name: "Arun Aaryan",
};
const Arun = {
    id: 9,
    name: "Arun Aaryan",
};
// Type Assertions
let uid = 9;
// first way
let customerId = uid; // want to copy uid but as number
//secon way
let customerId1 = uid; // want to copy uid but as number
// Functions
//function with return types
function fullNameGenerator(firstName, secondName) {
    //implicitly parameters are any type
    return firstName + " " + secondName;
}
// console.log(fullNameGenerator("Arun", "Aaryan"));
//functions with parameters as union types
function unionFunction(fullName, id) {
    return `${fullName} - ${id}`;
}
// console.log(unionFunction("Arun Aaryan", 9));
// function with no return type
function printSomething(fullName) {
    console.log(fullName);
}
let arun = {
    // age and name are must by default
    name: "Arun Aaryan",
    age: 25,
    // dynamic property assigns are not possible like below
    //   newProperty : 'hello'
};
// const add: Arithmetic = (x = 'string', y) => x + y; // since x is defined as number
const add = (x, y) => x + y; // since x is defined as number
class Person {
    constructor(name, id) {
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
    constructor(id, name, phone) {
        super(name, id);
        this.phone = phone;
        console.log(this);
    }
}
// const emp1 = new Employee(9, "Arun Aaryan", 347589);
// console.log(emp1.getName());
// Generics
function getArray(items) {
    return new Array().concat(items, 9);
}
let numbers = getArray([1, 2, 3, 5]);
let namesArray = getArray(["Arun", "Aaryan"]);
// console.log(numbers);
// console.log(namesArray);
