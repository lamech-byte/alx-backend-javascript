const fs = require('fs');

function countStudents(path) {
  try {
    const fileContent = fs.readFileSync(path, 'utf8');
    const lines = fileContent.trim().split('\n');

    const students = {};
    for (const line of lines) {
      const fields = line.split(',');
      if (fields.length === 4 && fields[0] !== 'firstname') {
        const field = fields[3];
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(fields[0]);
      }
    }

    console.log(`Number of students: ${lines.length - 1}`);
    for (const field in students) {
      console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
