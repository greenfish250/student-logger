//DOM elements
const studentForm = document.querySelector("#studentForm");
const studentContainer = document.querySelector(".students");
const nameInput = studentForm["name"];
const ageInput = studentForm["age"];
const rollInput = studentForm["roll"];

function createStudentElement(name, age, roll) {
  const studentSection = document.createElement("div");
  const studentName = document.createElement("h2");
  const studentAge = document.createElement("p");
  const studentRoll = document.createElement("p");

  studentName.innerText = `Student Name: ${name}`;
  studentAge.innerText = `Student Age: ${age}`;
  studentRoll.innerText = `Student Roll: ${roll}`;

  studentSection.append(studentName, studentAge, studentRoll);
  studentContainer.appendChild(studentSection);
}
