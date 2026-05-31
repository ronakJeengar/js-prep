function greetUser(name) {
  console.log(`Hello ${name}`);
}

greetUser("ronak");

function addNumbers(a, b) {
  return a + b;
}

console.log("Sum is : ", addNumbers(5, 3));

function calculateAge(birthYear) {
  return 2026 - birthYear;
}

console.log("Age is : ", calculateAge(1999));

function isAdult(age) {
  return age >= 18;
}

console.log("Is Adult : ", isAdult(16));
