// ================= THE START =================

// Chapters 14-16 Start

// Q1
let studentNamesLiteral = [];

// Q2
let studentNamesObject = new Array();

// Q3
let stringsArray = ["apple", "banana", "cherry"];

// Q4
let numbersArray = [1, 2, 3, 4, 5];

// Q5
let booleanArray = [true, false, true];

// Q6
let mixedArray = ["apple", 1, true, null];

// Q7
let qualificationsArray = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phil.",
  "PhD",
];
document.write("Qualifications:<br>");
for (let i = 0; i < qualificationsArray.length; i++) {
  document.write(i + 1 + ") " + qualificationsArray[i] + "<br>");
}

// Q8
let students = ["Saim", "Anas", "Abdullah"];
let scores = [450, 480, 400];
for (let i = 0; i < students.length; i++) {
  let percentage = (scores[i] / 500) * 100;
  document.write(
    "Score of " +
      students[i] +
      " is " +
      scores[i] +
      ". Percentage: " +
      percentage +
      "%<br>"
  );
}

// Q9
// Initialize an array with color names
let colorsArray = ["red", "green", "blue"];

// Display the array elements in the browser
document.write("<b>Original Array:</b> " + colorsArray.join(", ") + "<br><br>");

// a. Add color to the beginning of the array
let colorToAddBeginning = prompt("Enter a color to add to the beginning:");
colorsArray.unshift(colorToAddBeginning);
document.write(
  "<b>Array after adding color to the beginning:</b> " +
    colorsArray.join(", ") +
    "<br>"
);

// b. Add color to the end of the array
let colorToAddEnd = prompt("Enter a color to add to the end:");
colorsArray.push(colorToAddEnd);
document.write(
  "<b>Array after adding color to the end:</b> " +
    colorsArray.join(", ") +
    "<br>"
);

// c. Add two more colors to the beginning of the array
colorsArray.unshift("yellow", "orange");
document.write(
  "<b>Array after adding two more colors to the beginning:</b> " +
    colorsArray.join(", ") +
    "<br>"
);

// d. Delete the first color in the array
colorsArray.shift();
document.write(
  "<b>Array after deleting the first color:</b> " +
    colorsArray.join(", ") +
    "<br>"
);

// e. Delete the last color in the array
colorsArray.pop();
document.write(
  "<b>Array after deleting the last color:</b> " +
    colorsArray.join(", ") +
    "<br>"
);

// f. Ask the user at which index to add a color
let indexToAdd = parseInt(prompt("Enter the index to add the color:"));
let colorToAdd = prompt("Enter the color to add:");
colorsArray.splice(indexToAdd, 0, colorToAdd);
document.write(
  "<b>Array after adding color at index " +
    indexToAdd +
    ":</b> " +
    colorsArray.join(", ") +
    "<br>"
);

// g. Ask the user at which index to delete colors
let indexToDelete = parseInt(prompt("Enter the index to start deletion from:"));
let numberOfColorsToDelete = parseInt(
  prompt("Enter the number of colors to delete:")
);
colorsArray.splice(indexToDelete, numberOfColorsToDelete);
document.write(
  "<b>Array after deleting colors from index " +
    indexToDelete +
    ":</b> " +
    colorsArray.join(", ") +
    "<br>"
);

// Q10
let studentScores = [75, 90, 60, 85, 70];
studentScores.sort((a, b) => a - b);
console.log(studentScores); // This will log the sorted array in ascending order.

// Q11
let cities = ["New York", "London", "Tokyo", "Paris", "Sydney"];
let selectedCities = cities.slice(0, 3); // Copies first 3 elements.
console.log(selectedCities); // This will log the selected cities.

// Q12
let arr = ["This", "is", "my", "cat"];
let singleString = arr.join(" ");
console.log(singleString); // This will log "This is my cat".

// Q13
let fifoArray = [];
fifoArray.push(1); // First in
fifoArray.push(2); // Second in
fifoArray.push(3); // Third in
console.log(fifoArray.shift()); // First out
console.log(fifoArray.shift()); // Second out
console.log(fifoArray.shift()); // Third out

// Q14
let lifoArray = [];
lifoArray.push(1); // Last in
lifoArray.push(2); // Second last in
lifoArray.push(3); // Third last in
console.log(lifoArray.pop()); // Last out
console.log(lifoArray.pop()); // Second last out
console.log(lifoArray.pop()); // Third last out

// Q15
let phoneManufacturers = [
  "Apple",
  "Samsung",
  "Motorola",
  "Nokia",
  "Sony",
  "Haier",
];
document.write("<select>");
for (let i = 0; i < phoneManufacturers.length; i++) {
  document.write(
    "<option value='" +
      phoneManufacturers[i] +
      "'>" +
      phoneManufacturers[i] +
      "</option>"
  );
}
document.write("</select>");

// Chapters 14-16 End

// ================= THE END =================
