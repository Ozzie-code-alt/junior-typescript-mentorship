//Object
interface User {
  name: string;
  age: number;
  email?: string; // Optional property
  readonly id: number; // Readonly property
}

const user: User = {
  name: "John",
  id: 1,
  age: 30,
};

// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

interface Product {
  name: string;
  price: number;
  getDiscountedPrice(discount: number): number;
}

let product: Product = {
  name: "Laptop",
  price: 1000,
  getDiscountedPrice(discount: number): number {
    return this.price - this.price * discount;
  },
};
