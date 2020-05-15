// #1

let input = 3;

const numberOfSheep = function(input) {
  //Base case
  if (input === 0) {
    return input + ": All sheep jumped over the fence";
  }
  // General case
  return "Another sheep jumps over the fence" + numberOfSheep(input - 1);
};
console.log(numberOfSheep(3));