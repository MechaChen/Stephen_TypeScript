const color = "red";

let apples;
apples = 5; // when hover it, it show let apples: any

let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Functions that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json); // JSON.parse() return 'any' type
// 'false'              ->      boolean
// '4'                  ->      number
// '{"value: 5"}'       ->      {value: number}
// '{"name": "alex"}    ->      {name: string}

console.log(coordinates); // {x: 10, y: 20}
