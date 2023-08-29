const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (error, fileContent) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

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
        if (students.hasOwnProperty(field)) {
          console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
  }
}
      }

      resolve();
    });
  });
}

module.exports = countStudents;
