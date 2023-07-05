// main.ts

// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  readonly fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow any additional attribute
}

// Create a teacher object
const teacher: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: 'London',
  contract: false, // Additional attribute
};

console.log(teacher);

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacherFunction: PrintTeacherFunction = printTeacher;

console.log(printTeacherFunction("John", "Doe"));

interface Director extends Teacher {
  numberOfReports: number;
}

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

interface Student {
  firstName: string;
  lastName: string;
}

interface StudentClassInterface {
  new(firstName: string, lastName: string): StudentClass;
}

class StudentClass implements Student {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

const student: StudentClassInterface = StudentClass;

const student1 = new student('John', 'Doe');
console.log(student1.displayName()); // John
console.log(student1.workOnHomework()); // Currently working
