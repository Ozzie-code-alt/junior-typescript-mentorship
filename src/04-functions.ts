function add(a: number, b: number): number {
  return a + b;
}

//Optional Parameters
function greet(name: string, greeting?: string): string {
  //Add guard here
  if (greeting) {
    return `${greeting}, ${name}!`;
  }
  return `Hello, ${name}!`;
}

//Default Parameters
function multiply(a: number, b: number = 1): number {
  return a * b;
}

//Rest Parameters
function sum(...numbers: number[]): number {
  //Note that total and num here got inferred as number, because of the type annotation on numbers
  return numbers.reduce((total, num) => total + num, 0);
}

//Function Types
type BinaryOperation = (x: number, y: number) => number;

//Now we can use BinaryOperation as a type for any function that takes two numbers and returns a number
const subtract: BinaryOperation = (x, y) => x - y;
