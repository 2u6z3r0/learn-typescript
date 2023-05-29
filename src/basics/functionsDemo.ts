// It's better to define functions with argument having proper types
// and if possible define return type as well

function greet(name: string): string {
  // return 4; //this throw error as we can't return number
  return `Hi ${name}, welcome to typescripting`;
}

console.log(greet("vitthal"));

// in below function emailValidate is optiona;
function signUp(name: string, email: string, emailValidated = false): boolean {
  // sign up logic goes here
  // return sign up status true/false
  return true;
}
// now we can call signUp with or without passing emailValidated value
signUp("vitthal", "abc@xyz.com");
signUp("Ramesh", "ram@xyz.com", true);

function getUpper(str: string): string {
  const upperStr = str.toUpperCase();
  // if we dont return a string, typescript will throw an error
  return upperStr;
}

console.log(getUpper("welcome to typescript"));

// valid arrow function example
const sayHello = (name: string): void => {
  console.log(`Hello ${name}`);
  // as we have mentioned return type as void no need to return anything
};

sayHello("Mark");

// valid arrow function
const doubleTheNumber = (val: number) => val * 2;
// in the above example return type is automatically inferred to number
console.log(doubleTheNumber(8));

// if we try to assign the value to return from above
// method to someother type variable then we will get type error
// uncomment below example and see

// let output: string;
// output = doubleTheNumber(4)

const names = ["Mark", "Joe", "Ruby"];
// here inside map for name type is automatically determined by typescript
// we also add a return type for array methods to make sure we get expected output
names.map((name): string => `Hello, ${name}`);

export {};
