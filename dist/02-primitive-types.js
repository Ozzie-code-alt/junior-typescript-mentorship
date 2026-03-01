"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Primitive
let username = "Kitkat";
let age = 30;
let isAdmin = true;
//Arrays
let numbers = [1, 2, 3, 4, 5];
let names = ["Alice", "Bob", "Charlie"];
let isActive = [true, false, true];
//Tuples
let user = ["Kitkat", 30];
//Enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let favoriteColor = Color.Green;
//Any (avoid using this, but it's here for completeness)
let randomValue = "Hello";
randomValue = 42;
randomValue = true;
//Unknown (safer than any)
let unknownValue = "Hello";
if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase());
}
function greet(name) {
    console.log(`Hello, ${name}!`);
    return name;
}
