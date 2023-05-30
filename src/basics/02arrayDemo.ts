// there are 2 ways to define array type

const names: string[] = [];
const scores: Array<string> = [];

type User = {
  name: string;
  email: string;
  isEmailValidated: false;
};

const users: User[] = [];
const modifiedUsers: Array<User> = [];

// multi dimension array example
const matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];

// read only array
const childrenNames: readonly string[] = ["Anna", "Gennie"];
// childrenNames.push('Max') // typescript throws an error saying push is not available
