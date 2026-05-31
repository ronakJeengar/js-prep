const appName = "Learning Javascript";

function print() {
  console.log(`App Name : ${appName}`);
}

print();
console.log(`App Name : ${appName}`);

function testScope() {
  const message = "Inside Function";
  console.log(`Message is : ${message}`);
}

testScope();
console.log(`Message is : ${message}`);

if (true) {
  let value = 23;
  console.log(`Value is : ${value}`);
}

console.log(`Value is : ${value}`);

if (true) {
  var value = 24;
  console.log(`Value is : ${value}`);
}

console.log(`Value is :${value}`);
