const user = {
  name: "ravi",
  age: 26,
  email: "ravi@example.com",
  country: "India",
  isStudent: true,
};

console.log("user is : ", user);
console.log("user name is : ", user.name);
user.age = 27;
user.favoriteLanguage = "Java";
console.log("updated user is : ", user);

// Create a product object:
const product = {
  name: "Pen",
  price: 5,
  brand: "cello",
  inStock: true,
};

product.price = 10;
product.category = "School";
console.log("product is : ", product);
