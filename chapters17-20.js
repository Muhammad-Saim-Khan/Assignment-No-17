// ================= THE START =================

// Chapters 17-20 Start

// Q1
let emptyMultiArray = [];

// Q2
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Q3
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Q4
let tableNumber = parseInt(
  prompt("Enter the number for multiplication table:")
);
let tableLength = parseInt(prompt("Enter the length of the table:"));

for (let i = 1; i <= tableLength; i++) {
  console.log(tableNumber + " x " + i + " = " + tableNumber * i);
}

// Q5
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Q6
// a. Counting: 1 to 15
console.log("Counting: ");
for (let i = 1; i <= 15; i++) {
  console.log(i);
}

// b. Reverse counting: 10 to 1
console.log("Reverse counting: ");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// c. Even: 0 to 20
console.log("Even: ");
for (let i = 0; i <= 20; i += 2) {
  console.log(i);
}

// d. Odd: 1 to 19
console.log("Odd: ");
for (let i = 1; i <= 19; i += 2) {
  console.log(i);
}

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
console.log("Series: ");
for (let i = 2; i <= 20; i += 2) {
  console.log(i + "k");
}

// Q7
let items = ["cake", "apple pie", "cookie", "chips", "patties"];
let userInput = prompt("Enter an item to search:");

if (items.includes(userInput)) {
  alert("Yes, " + userInput + " is available in the list.");
} else {
  alert("Sorry, " + userInput + " is not available in the list.");
}

// Q8
let A = [24, 53, 78, 91, 12];
let largestNumber = Math.max(...A);
console.log("Largest number:", largestNumber);

// Q9
let a = [24, 53, 78, 91, 12];
let smallestNumber = Math.min(...a);
console.log("Smallest number:", smallestNumber);

// Q10
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

// Chapters 17-20 End

// ================= THE END =================
