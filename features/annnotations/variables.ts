// Type Inference
// Variable Declaration = Variable Initialization
const color = "red";
// if declaration and initialization are on the same line,
// TypeScript will figure out the type of 'color' for us

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
// what we care about Function is (will go into Annotation):
//   1. what argument into Func
//   2. what value Func return

// const FuncName: Type Annotation = Real Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};
