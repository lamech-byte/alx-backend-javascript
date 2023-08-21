const fs = require('fs');

function countStudents(path) {
  try {
    fs.readFileSync(path, 'utf-8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n');
    const students = lines.slice(1).map(line => line.split(','));

    if (students.length === 0) {
      throw new Error('Database is empty');
    }

    const fields = {};
    students.forEach(student => {
      const field = student[3];
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(student[0]);
    });

    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);
    for (const field in fields) {
      console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
    }
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = countStudents;
