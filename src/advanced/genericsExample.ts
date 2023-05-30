function returnSame<T>(val1: T): T {
  // val1.length () //throws ts error - Property 'length' does not exist on type 'T'
  return val1;
}

returnSame("vitthal");

export interface Person {
  name: string;
  age: number;
}

// T can be custom type as well
function returnSame2<T extends Person>(val: T): T {
  return val;
}

returnSame2({ name: "Vitthal", age: 32 });

export type Id = number | string;
function mulitplyBy2<T extends Id>(val: T): T {
  if (typeof val === "number") {
    return (val * 2) as T;
  } else if (typeof val === "string") {
    return (val + val) as T;
  } else {
    throw new Error("Invalid Type");
  }
}

mulitplyBy2(2);
mulitplyBy2("Hello");
// mulitplyBy2(true); // throws ts error

function returnFirstEntry<T>(values: T[]): T {
  return values[0];
}

// arrow function syntax for above function
const returnFirstValue = <T>(values: T[]): T => {
  return values[0];
};

// in react people might specify genetic using extra comma <T,> to not to confuse with JSX HTML tag
