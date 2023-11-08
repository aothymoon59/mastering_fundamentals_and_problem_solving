type User = {
  id: number;
  name: string;
};

const users: Array<User> = [
  {
    id: 12,
    name: "Moon",
  },
  {
    id: 13,
    name: "Alu",
  },
  {
    id: 14,
    name: "Potol",
  },
];

// T --> Array of objects
function getPropertyFromArray<T, K extends keyof T>(
  array: T[],
  key: K
): T[K][] {
  return array.map((obj) => obj[key]);
}
console.log("Extracted Names: ", getPropertyFromArray(users, "name"));
