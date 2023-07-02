// HolbertonCourse class
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name, "Name");
    this._length = this.validateNumber(length, "Length");
    this._students = this.validateArray(students, "Students");
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    this._name = this.validateString(newName, "Name");
  }

  // Getter for length
  get length() {
    return this._length;
  }

  // Setter for length
  set length(newLength) {
    this._length = this.validateNumber(newLength, "Length");
  }

  // Getter for students
  get students() {
    return this._students;
  }

  // Setter for students
  set students(newStudents) {
    this._students = this.validateArray(newStudents, "Students");
  }

  // Helper method to validate string attribute
  validateString(value, attributeName) {
    if (typeof value !== "string") {
      throw new TypeError(`${attributeName} must be a string`);
    }
    return value;
  }

  // Helper method to validate number attribute
  validateNumber(value, attributeName) {
    if (typeof value !== "number") {
      throw new TypeError(`${attributeName} must be a number`);
    }
    return value;
  }

  // Helper method to validate array attribute
  validateArray(value, attributeName) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${attributeName} must be an array`);
    }
    return value;
  }
}
