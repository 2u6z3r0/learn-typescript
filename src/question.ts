// interview questions on eventloop and promise

console.log(1);
setTimeout(() => console.log(2), 100);
setTimeout(() => console.log(3), 0);
let num = new Promise((resolve) => resolve(4));
num.then((val) => console.log(val));
console.log(5);

// Promise related

let getNum = new Promise((resolve) => resolve(8));
let getName = new Promise((resolve) => resolve("Vitthal"));
let getSalary = new Promise((res, reject) =>
  reject("Could not get salary info")
);

Promise.all([getNum, getName, getSalary])
  .then((values) => console.log("promise.all ==>", values))
  .catch((reason) => console.log("promise.all rejected =>", reason));

Promise.allSettled([getNum, getName, getSalary])
  .then((values) => console.log("promise.allSettled ==>", values))
  .catch((reason) => console.log("promise.allSettled rejected =>", reason));

Promise.race([getNum, getName, getSalary])
  .then((values) => console.log("promise.race ==>", values))
  .catch((reason) => console.log("promise.race rejected =>", reason));
