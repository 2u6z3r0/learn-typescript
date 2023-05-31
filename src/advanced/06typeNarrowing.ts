// to narrow down the type we can various options like
// typeof, in, instanceof etc

//  1. type narrowing using typeof
/**
 * Description placeholder
 * @author Vitthal Patil
 *
 * @param {(number | string)} value
 * @returns {(string | number)}
 */
function mutliplyBySelf(value: number | string) {
  if (typeof value === "string") {
    return `${value}${value}`;
  } else {
    return value * 2;
  }
}

/**
 * Description placeholder
 * @author Vitthal Patil
 *
 * @export
 * @typedef {Id}
 */
export type Id = number | string;
/**
 * Description placeholder
 * @author Vitthal Patil
 *
 * @template T
 * @param {T} val
 * @returns {T}
 */
function mulitplyBy2<T extends Id>(val: T): T {
  if (typeof val === "number") {
    return (val * 2) as T;
  } else if (typeof val === "string") {
    return (val + val) as T;
  } else {
    throw new Error("Invalid Type");
  }
}

// 2. type narrowing using in operator
/**
 * Description placeholder
 * @author Vitthal Patil
 *
 * @typedef {User}
 */
type User = {
  name: string;
  email: string;
};

/**
 * Description placeholder
 * @author Vitthal Patil
 *
 * @typedef {Admin}
 */
type Admin = User & {
  isAdmin: boolean;
};

/**
 * Description placeholder
 * @author Vitthal Patil
 *
 * @param {(User | Admin)} account
 * @returns {boolean}
 */
function isAdmin(account: User | Admin): boolean {
  // using a unique prop, we can figure out account type
  if ("isAdmin" in account) {
    return account["isAdmin"];
  }
  return false;

  // above code can be shortened to single line like below
  // return 'isAdmin' in account ? accoutn['isAdmin'] : false
}

/**
 * Description placeholder
 * @author Vitthal Patil
 *
 * @type {boolean}
 */
let result = isAdmin({ name: "Robin", email: "abc@xyz.com" });
console.log("Robin isAdmin ? ", result);

/**
 * Description placeholder
 * @author Vitthal Patil
 *
 * @type {boolean}
 */
let result2 = isAdmin({ name: "Ted", email: "abd@xyz.com", isAdmin: true });
console.log("Ted isAdmin ? ", result2);

// 3 using instanceOf, this technique will be used for object we can generate using new keyword

/**
 * Description placeholder
 * @author Vitthal Patil
 *
 * @param {(Date | string)} x
 */
function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log("Its a Date => ", x.toUTCString());
  } else {
    console.log("It's a string => ", x.toUpperCase());
  }
}

logValue(new Date());
logValue("Hello from typescript");

// 4 type narrowing with type preidcates

/**
 * Description placeholder
 * @author Vitthal Patil
 *
 * @typedef {Fish}
 */
type Fish = {
  swim(): void;
};

/**
 * Description placeholder
 * @author Vitthal Patil
 *
 * @typedef {Bird}
 */
type Bird = {
  fly(): void;
};

/**
 * Description placeholder
 * @author Vitthal Patil
 *
 * @param {(Fish | Bird)} pet
 * @returns {pet is Fish}
 */
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

/**
 * Description placeholder
 * @author Vitthal Patil
 *
 * @param {(Fish | Bird)} pet
 */
function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet; // pet is Fish
    console.log("get Fish food");
  } else {
    pet; // pet is Bird
    console.log("get Bird good");
  }
}
