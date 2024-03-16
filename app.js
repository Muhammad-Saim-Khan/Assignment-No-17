// ================= THE START =================

// Chapter 14 to 20 Start

// Chapter 14 (If statements nested) Start

// Q1
let password = prompt("Enter your password:");

if (password !== "") {
  if (password.length <= 5) {
    alert("Password must be greater than 5");
  } else {
    alert("OK");
  }
}

// Q2
if (a === 1) {
  if (c === "Max") {
    alert("OK");
  }
}

// Q3
if (a === 1 && c === "Max") {
  alert("OK");
}

// Q4
let num1 = 5;
let num2 = 5;

if (num1 === num2) {
  if (num1 <= num2) {
    alert("The conditions are true!");
  }
}

// Chapter 14 (If statements nested) End

// Chapter 15 (Array I) Start

// Q1
let emptyArray = [];

// Q2
let arrayWithOneString = ["Hello"];

// Q3
let alphabet = ["h", "i", "j", "k"];
alert(alphabet[2]); // This will display "j" in an alert.

// Q4
let Alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
let totalLength = Alphabet.length;
console.log("Total length of array:", totalLength);

// Q5
let arrayWithOneElement = ["apple"];
arrayWithOneElement[1] = "banana";
alert(arrayWithOneElement[1]); // This will display "banana" in an alert.

// Chapter 15 (Array I) End

// Chapter 16 (Array III) Start

// Q1
let sizes = ["S", "M", "XL", "XXL", "XXXL"];
sizes.shift();
console.log(sizes); // This will log ["M", "XL", "XXL", "XXXL"]

// Q2
let Sizes = ["S", "M", "XL", "XXL", "XXXL"];
Sizes.unshift(1, 2, 3);
console.log(Sizes); // This will log [1, 2, 3, "S", "M", "XL", "XXL", "XXXL"]

// Q3
let array = ["apple"];
array.unshift("banana");
alert(array[0]); // This will display "banana" in an alert.

// Q4
let siZes = ["S", "M", "XL", "XXL", "XXXL"];
siZes.splice(2, 0, "L");
console.log(siZes); // This will log ["S", "M", "L", "XL", "XXL", "XXXL"]

// Q5
let sizeS = ["S", "M", "XL", "XXL", "XXXL"];
let regSize = sizeS.slice(0, 3);
console.log(regSizes); // This will log ["S", "M", "XL"]

// Q6
let pets = ["dog", "cat", "ox", "duck", "frog"];
pets.splice(1, 3, "parrot", "hamster");
console.log(pets); // This will log ["dog", "parrot", "hamster", "frog"]

// Q7
let Pets = ["dog", "cat", "ox", "duck", "frog"];
Pets.splice(1, 2);
console.log(Pets); // This will log ["dog", "duck", "frog"]

// Q8
let petS = ["dog", "cat", "ox", "duck", "frog", "flea"];
let slicedPets = petS.slice(3, 5);
console.log(slicedPets); // This will log ["duck", "frog"]

// Chapter 16 (Array III) End

// Chapter 17 - 20 (for Loops) Start

// Q1
for (let i = 0; i < 10; i++) {
  // Your loop body here
}

// Q2
for (let i = 0; i <= 11; i++) {
  // Your loop body here
}

// Q3
// (let, ;, <, +, +)

// Q4
for (let count = 0; count < 100; count++) {
  // Your loop body here
}

// Q5
for (let i = 3; i > 0; i--) {
  // Your loop body here
}
let flag = true; // Or false, depending on your choice

// Q6
let Array = [1, 2, 3, 4, 5];
let ArrayLength = Array.length; // Assigns the number of elements in the array to the variable arrayLength

for (let i = 0; i < pets.length; i++) {
  // Your loop body here
}

// Q7
for (let i = 0; i < pets.length; i++) {
  // Your loop body here
}

for (let i = 0; i < 10; i++) {
  if (i === 1) {
    alert(i);
    break;
  }
}

// Q8
for (let i = 0; i < 10; i++) {
  if (i === 1) {
    alert(i);
    break;
  }
}

// Q9
let userNames = ["John", "Alice", "Bob"]; // Array containing user names
let firstName = prompt("Enter first name:");

for (let i = 0; i < userNames.length; i++) {
  if (firstName === userNames[i]) {
    alert("Enter");
    break;
  } else {
    alert("Please write correct user name");
    break;
  }
}

// Q10
var matchFound = false;
for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
}

if (!matchFound) {
  alert("No match found");
}

// Q11
var matchFound = false;
for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
}

if (!matchFound) {
  alert("No match found");
}

// Q12
var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < firstArr.length; i++) {
  for (let j = 0; j < secondArr.length; j++) {
    console.log(firstArr[i] + secondArr[j]);
  }
}

// Chapter 17 - 20 (for Loops) End

// Chapter 14 to 20 End

// ================= THE END =================
