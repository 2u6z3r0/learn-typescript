// A type alias is exactly that - a name for any type. The syntax for a type alias is:

// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-aliases

type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

// You can actually use a type alias to give a name to any type at all, not just an object type.
// For example, a type alias can name a union type:

type ID = number | string;

// this is also valid
type UserInputSanitizedString = string;

// we can create aliasTypes using interface as well.
// To see the difference between interface and type visit below link
// https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
