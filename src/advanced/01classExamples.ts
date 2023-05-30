// example 1
class user {
  name: string;
  age: number;
  isActive: boolean;
  constructor(name: string, age: number, isActive: boolean) {
    this.name = name;
    this.age = age;
    this.isActive = isActive;
  }
}
const vitthal = new user("Vitthal", 32, false);

// example 2
class user2 {
  // its a shorthand for creating name,age,isActive props and initializing them using constructor
  constructor(name: string, age: number, isActive = false) {}
}

const mark = new user2("Mark", 32);

// private, public, protected access specifiers,
// if we dont mention access specifier explicitly then by default it will be public
class employee {
  name: string;
  readonly id: number;
  protected department: string;
  private salary: number;

  constructor(name: string, department: string, salary = 15000) {
    this.name = name;
    this.department = department;
    this.salary = salary;
    this.id = Math.floor(100 * Math.random());
  }
}

const emp1 = new employee("Raj", "support", 20000);
console.log(JSON.stringify(emp1));
// emp1.id = 123; // we cant change value as its read only

class employee2 {
  readonly id: number;

  constructor(
    public name: string,
    protected department: string,
    private _salary = 15000
  ) {
    this.id = Math.floor(100 * Math.random());
  }

  public get salary(): number {
    return this._salary;
  }

  public set salary(salary: number) {
    this._salary = salary;
  }
}

const emp2 = new employee2("Vitthal", "development", 20000);
console.log(JSON.stringify(emp2));

// emp1.id = 123; // we cant change value as its read only

console.log(emp2.salary);
emp2.salary = 25000;
console.log(emp2.salary);

export {};
