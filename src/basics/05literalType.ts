// using literal type we ensure that varialbe will be having only allowed values

const status: -1 | 0 | 1 = 0;

const alignment: "right" | "center" | "left" = "left";

interface Options {
  width: number;
}

function configure(x: Options | "auto") {
  // ...
}
configure({ width: 100 });
configure("auto");
// configure("automatic"); // throws an ts error

function handleRequest(url: string, method: "GET" | "POST"): void {
  // some logic
}

const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);
// here we get `Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'` error

// there are multiple ways to fix this issue
// Option 1
const req2 = { url: "https://example.com", method: "GET" as "GET" };

// Option 2
handleRequest(req.url, req.method as "GET");

// Option 3
const req3 = { url: "https://example.com", method: "GET" } as const;
// The as const suffix acts like const but for the type system,
// ensuring that all properties are assigned the literal type instead of
// a more general version like string or number.

export {};
