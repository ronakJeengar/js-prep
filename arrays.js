const movies = ["dhurandhar", "war", "pathaan", "stree", "avengers"];
console.log("First Movie : ", movies[0]);
console.log("Last Movie : ", movies[movies.length - 1]);
movies.push("pushpa");
movies.pop();

for (let index = 0; index < movies.length; index++) {
  const element = movies[index];
  console.log(element);
}
console.log("Final Array : ", movies);
console.log("Total Movies : ", movies.length);

// Create an array of product objects:
const products = [
  {
    name: "Keyboard",
    price: 300,
  },
  {
    name: "Mouse",
    price: 200,
  },
];

console.log("fFrst Product Name : ", products[0].name);
products.push({
  name: "Display",
  price: 2000,
});

console.log("Total Products : ", products.length);
