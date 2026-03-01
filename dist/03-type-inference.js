"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Type Inference
let inferredString = "This is a string"; // TypeScript infers this as string
let inferredNumber = 42; // TypeScript infers this as number
inferredString = "Another string"; // Valid
inferredNumber = 100; // Valid
// inferredString = 123; // Error: Type 'number' is not assignable to type 'string'
// inferredNumber = "Not a number"; // Error: Type 'string' is not assignable to type 'number'
