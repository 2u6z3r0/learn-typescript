type Person = {
  name: string;
  age: number;
  gender: "male" | "female";
};

function getProp<T extends Person, U extends keyof T>(val: T, key: U): void {
  console.log(val[key]);
}

// this works fine
getProp({ name: "Jack", age: 44, gender: "male" }, "name");

// but if we try to access any other prop which is not part of Person interface
// it will give ts error

// getProp({ name: "Jack", age: 44, gender: "male" }, "salary"); //not allowed

// more useful generic
function getProp2<T extends Object, U extends keyof T>(obj: T, key: U): void {
  console.log(`${String(key)} => ${obj[key]}`);
}

const home = {
  name: "Dream House",
  builtYear: 2020,
  type: "individual house",
  anameties: ["parking", "power backup"],
};
getProp2(home, "name");
getProp2(home, "anameties");
// getProp2(home, "rent"); // not allowed

export {};
