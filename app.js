//DOM elements
const studentForm = document.querySelector("#studentForm");
const studentContainer = document.querySelector(".students");
const nameInput = studentForm["name"];
const ageInput = studentForm["age"];
const rollInput = studentForm["roll"];

//array of student objects
const students = [
  {
    name: "Ethan",
    age: 18,
    roll: 36,
  },
];

//add student to array of students when user inputs info
function addStudent(name, age, roll) {}

//insert student info into the DOM
function createStudentElement({ name, age, roll }) {
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

//for every student in the array of student objects, insert their info into the DOM
students.forEach(createStudentElement);
