function greet(name) {
  console.log(`Hello ${name}`);
}

greet("Ronak");

const processUser = (name, callback) => {
  console.log("Processing user...");
  callback(name);
};

processUser("Ronak", greet);

const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b !== 0) {
    return a / b;
  }
  return "Can not divide by zero";
};

const executeOperation = (a, b, callback) => {
  return callback(a, b);
};

console.log(`Addition is : ${executeOperation(3, 4, add)}`);
console.log(`Subtraction is : ${executeOperation(3, 4, sub)}`);
console.log(`Multiply is : ${executeOperation(3, 4, multiply)}`);
console.log(`Divid is : ${executeOperation(3, 4, divide)}`);
