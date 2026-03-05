// Union types  (OR)
let status: "success" | "error" | "loading";
let value: string | number;

// Intersection types (AND)
interface User {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
}

type EmployeeUser = User & Employee;
