// Write an interface named Student that accepts the following elements:
//  firstName(string), lastName(string), age(number), and location(string)
export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

//create an array named studentsList containing two variables
const student1: Student = {
  firstName: "Wendy",
  lastName: "Munyasi",
  age: 27,
  location: "Nairobi, Kenya",
};

const student2: Student = {
  firstName: "Trizah",
  lastName: "Masaba",
  age: 26,
  location: "Nairobi, Kenya",
};

// Array of students
const studentsList: Array<Student> = [
  student1,
  student2,
];

function renderTable() {
  const table = document.createElement("table");

  for (const student of studentsList) {
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");

    firstNameCell.textContent = student.firstName;

    row.appendChild(firstNameCell);

    const locationCell = document.createElement("td");

    locationCell.textContent = student.location;

    row.appendChild(locationCell);

    table.appendChild(row);
  }
  document.body.appendChild(table);
}

renderTable();
