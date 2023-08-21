const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const students = lines.slice(1).map(line => line.split(','));

        if (students.length === 0) {
          reject(new Error('Database is empty'));
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

        resolve();
      }
    });
  });
}

module.exports = countStudents;
