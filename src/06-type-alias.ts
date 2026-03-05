//Type Alias

type User = {
  x: number;
  y: number;
};

let user: User = {
  x: 10,
  y: 20,
};

type ID = string | number;

let userId: ID = "abc123";
userId = 123; // Valid

//Types vs Interfaces
//Interfaces can be extended and implemented, while type aliases cannot.
//Interfaces can only describe object shapes, while type aliases can describe any type, including primitives, unions, and intersections.
// Interfaces can be merged, while type aliases cannot.
