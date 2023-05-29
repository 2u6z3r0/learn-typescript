// premitive types are string,number,boolean

const name: string = "vitthal";
// NOTE: as we are assigning value, it's advised that
// we should not declare the type,
console.log("name", name);

const age = 5;
// here type will be automatically inferred by typescript.
// if we are assigning a value while declaring the variable,then its
// better not mention type explicitely
console.log("age", age);

let isValid: boolean;
isValid = true;
console.log("isValid, ", isValid);

// Less known premitive types bigint & symbol
// bigint allowed only if target is ES2020 or newer

// Creating a bigint via the BigInt function
const oneHundred: bigint = BigInt(100);

// Creating a BigInt via the literal syntax
const anotherHundred: bigint = 100n;

const firstName = Symbol("name");
const secondName = Symbol("name");

// TODO should be fixed block scope re-declaration issue
// below line is to fix scope issues temporarely,
export {};
