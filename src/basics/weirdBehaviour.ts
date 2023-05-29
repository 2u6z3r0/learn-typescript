type User = {
  name: string;
  isPaid: boolean;
};

function createUser(user: User) {
  // user creation logic goes here
}

createUser({ name: "Vitthal", isPaid: false }); //this works as expected

// lets say if user passes extra arguments to this function, typescript should throw error
createUser({ name: "Jack", isPaid: true, email: "abc@xyz.com" }); // this throws error as expected

// but lets try it in different way
const userInfo = { name: "John", isPaid: false, email: "xyz@abc.com" };
createUser(userInfo); // weird right??  🤪

// typescript will remove all weird behavious of JS 😆

export {};
