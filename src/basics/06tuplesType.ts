let rgb: [number, number, number];

rgb = [123, 132, 144];

// assuming first element is ID and next is name
let user: [number, string];

user = [12, "Ted"];

// be cautious, as tuple is array it supports array methods
// using which user can add more info

user = [14, "Jack", "Hi"]; // this throws as ts error

user = [15, "Ethen"];
user.push("hello"); // this works, so be cautious while using tuple
// we can use readonly or as const
