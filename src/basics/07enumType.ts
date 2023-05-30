// enum value always start with 0 by default.

enum seatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
}

const mychoice = seatChoice.AISLE;

// we can change default starting value like below
enum seatChoice2 {
  AISLE = 3,
  MIDDLE, // value will be 4
  WINDOW, // value is 5
}
const mychoice2 = seatChoice2.AISLE;
console.log(mychoice2);

// we can different value for each choice

enum seatChoice3 {
  AISLE = 4,
  MIDLE = 8,
  WINDOW, // value will be 9
  // if value type of previous option is number
  // then next option will have incremented value
}

const mychoice3 = seatChoice3.WINDOW;
console.log(mychoice3);

// we can assign string type to value
enum seatChoice4 {
  AISLE = "aisle",
  MIDLE = 8,
  WINDOW = "window",
}

const mychoice4 = seatChoice4.WINDOW;
console.log(mychoice4);
