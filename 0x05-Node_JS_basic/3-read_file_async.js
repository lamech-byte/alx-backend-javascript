/*
*Creating countStudents function
*that reads the provided database.csv file
*asynchronously and returns a Promise
*/

const fs = require('fs').promises;

const countStudents = async (dataPath) => {
  try {
    const stat = await fs.stat(dataPath);
    if (!stat.isFile()) {
      throw new Error('Cannot load the database');
    }

    const content = await fs.readFile(dataPath, 'utf-8');
    const lines = content.trim().split('\n');
    const studentGroups = {};
    const fieldNames = lines[0].split(',');
    const propNames = fieldNames.slice(0, fieldNames.length - 1);

    lines.slice(1).forEach((line) => {
      const record = line.split(',');
      const propValues = record.slice(0, record.length - 1);
      const field = record[record.length - 1];

      studentGroups[field] = studentGroups[field] || [];
      const entries = propNames.map((name, idx) => [name, propValues[idx]]);
      studentGroups[field].push(Object.fromEntries(entries));
    });

    const totalStudents = Object.values(studentGroups)
      .reduce((total, group) => total + group.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, group] of Object.entries(studentGroups)) {
      const studentNames = group.map((student) => student.firstname).join(', ');
      console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    } else {
      throw error;
    }
  }
};

module.exports = countStudents;
