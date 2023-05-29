// A union type is a type formed from two or more other types,
// representing values that may be any one of those types.

// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types

function printId(id: number | string) {
  console.log("Your ID is: " + id);
}

printId(200);
printId("A200");

// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}
