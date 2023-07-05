// main.ts

// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students and store them in an array
let student1: Student | undefined = undefined;
let student2: Student | undefined = undefined;
let studentsList: Student[] = [];

if (!student1) {
  student1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 20,
    location: 'New York',
  };
}

if (!student2) {
  student2 = {
    firstName: 'Jane',
    lastName: 'Smith',
    age: 22,
    location: 'London',
  };
}

studentsList = [student1, student2];

// Render the table
const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
