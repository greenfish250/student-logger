//DOM elements
const studentForm = document.querySelector("#studentForm");
const studentContainer = document.querySelector(".students");
const nameInput = studentForm["name"];
const ageInput = studentForm["age"];
const rollInput = studentForm["roll"];

//array of student objects
const students = JSON.parse(localStorage.getItem("students")) || [];

//add student to array of students when user inputs info
function addStudent(name, age, roll) {
  students.push({
    name: name,
    age: age,
    roll: roll,
  });

  localStorage.setItem("students", JSON.stringify(students));

  return { name, age, roll };
}

//insert student info into the DOM
function createStudentElement({ name, age, roll }) {
  //create HTML elements to display student info
  const studentSection = document.createElement("div");
  const studentName = document.createElement("h2");
  const studentAge = document.createElement("p");
  const studentRoll = document.createElement("p");

  //text content of student listing
  studentName.innerText = `Student Name: ${name}`;
  studentAge.innerText = `Student Age: ${age}`;
  studentRoll.innerText = `Student Roll: ${roll}`;

  //insert elements into the DOM
  studentSection.append(studentName, studentAge, studentRoll);
  studentContainer.appendChild(studentSection);
}

//for every student in the array of student objects, insert their info into the DOM
students.forEach(createStudentElement);

//the user has pressed the Add Student button
studentForm.onsubmit = function (e) {
  e.preventDefault();

  //add the student info provided by user to the array of student objects
  const newStudent = addStudent(
    nameInput.value,
    ageInput.value,
    rollInput.value
  );

  //insert the new student into the DOM for display
  createStudentElement(newStudent);

  //clear data input boxes
  nameInput.value = "";
  ageInput.value = "";
  rollInput.value = "";
};
