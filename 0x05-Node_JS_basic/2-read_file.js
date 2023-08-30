// Import the required module
const fs = require('fs');

const countStudents = (dataPath) => {
  if (!fs.existsSync(dataPath) || !fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }

  const content = fs.readFileSync(dataPath, 'utf-8').trim();
  const lines = content.split('\n');
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

  Object.entries(studentGroups).forEach(([field, group]) => {
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
  });
};

module.exports = countStudents;
