function getGrades(inputSelector) {
  // get grades from the input box
  const grades = document.querySelector(inputSelector).value;
  // split them into an array (String.split(','))
  const gradesArray = grades.split(",");
  // clean up any extra spaces, and make the grades all uppercase. (Array.map())
  const cleanGrades = gradesArray.map((grade) => grade.trim().toUpperCase());
  console.log(cleanGrades);
  // return grades
  return cleanGrades;
}

function lookupGrade(grade) {
  // converts the letter grade to it's GPA point value and returns it
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  } else if (grade === "C") {
    points = 2;
  } else if (grade === "D") {
    points = 1;
  }
  return points;
}

function calculateGpa(grades) {
  // gets a list of grades passed in
  // convert the letter grades to gpa points
  const gradePoints = grades.map((grade) => lookupGrade(grade));
  // calculates the GPA
  const gpa =
    gradePoints.reduce((total, num) => total + num) / gradePoints.length;
  // return the GPA
  return gpa.toFixed(2);
}

function outputGpa(gpa, selector) {
  // takes a gpa value and displays it in the HTML in the element identified by the selector passed in
  const outputElement = document.querySelector(selector);
  outputElement.innerText = gpa;
}

function clickHandler() {
  // when the button in our html is clicked
  // get the grades entered into the input
  const grades = getGrades("#grades");
  // calculate the gpa from the grades entered
  const gpa = calculateGpa(grades);
  // display the gpa
  outputGpa(gpa, "#output");
}

document.querySelector("#submitButton").addEventListener("click", clickHandler);

//  arrays.js
// const steps = ["one", "two", "three"];
// function listTemplate(step) {
//   return `<li>${step}</li>`;
// };
// const stepsHtml = steps.map(listTemplate);
// document.querySelector("#myList").innerHTML = stepsHtml.join();

// const letterGrade = document.getElementById('userInput')

// function processGrades(string) {
//     // Split the string into an array
//     let gradesArray = string.split(',');

//     // Trim extra spaces and convert to uppercase
//     gradesArray = gradesArray.map(grade => grade.trim().toUpperCase());

//     return gradesArray;
// }
// const cleanedInput = processGrades(letterGrade);

// function gradeReturn(grade) {
//     let points = 0;
//     if (grade === "A") {
//         points = 4;
//     }
//     else if (grade === "B") {
//         points = 3;
//     }
//     else if (grade === "C") {
//         points = 2;
//     }
//     else if (grade === "D") {
//         points = 1;
//     }
//     else {
//         points = 0;
//     }
//     return points
// };

// const allPoints = gradeReturn(cleanedInput);
// const totalPoints = allPoints.reduce(function (total, item){
//     return total + item;
// });

// const gpa = totalPoints / allPoints.length;
// gpa.textContent = `Your gpa is: ${gpa}`;

// document.querySelector("#gpa").innerHTML = gpa.join();
// submitButton.addEventListener('click', gpa);



// const food = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
// const lengthofwords = food.filter(function (word) {
//     return word.length < 6;
// });

// const numbers = [12, 34, 21, 54];
// const luckyNumber = 21;
// let findLuck = numbers.indexOf(luckyNumber);