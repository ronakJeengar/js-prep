const array = [1, 2, 3, 4, 5];

const doubledNumbers = array.map((number) => number * 2);

const evenNumbers = doubledNumbers.filter((number) => number % 2 === 0);

console.log(`Doubled Number : ${doubledNumbers}`);
console.log(`Even Numbers : ${evenNumbers}`);

const users = [
  {
    id: 1,
    name: "Ronak",
  },
  {
    id: 2,
    name: "Ravi",
  },
  {
    id: 3,
    name: "Rahul",
  },
];

const user = users.find((user) => user.id === 2);

console.log(`User is : ${user}`);
