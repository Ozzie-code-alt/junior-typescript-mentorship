//Primitive
let username: string = "Kitkat";
let age: number = 30;
let isAdmin: boolean = true;

//Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
let isActive: boolean[] = [true, false, true];

//Tuples
let user: [string, number] = ["Kitkat", 30];

//Enums
enum Color {
  Red,
  Green,
  Blue,
}
let favoriteColor: Color = Color.Green;

//Any (avoid using this, but it's here for completeness)
let randomValue: any = "Hello";
randomValue = 42;
randomValue = true;

//Unknown (safer than any)
let unknownValue: unknown = "Hello";
if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase());
}

function greet(name: string): string {
  console.log(`Hello, ${name}!`);
  return name;
}
