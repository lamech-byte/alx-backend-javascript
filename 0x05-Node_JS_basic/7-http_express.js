const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

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

    const studentsData = {
      count: totalStudents,
      inFields: {},
    };

    for (const [field, group] of Object.entries(studentGroups)) {
      studentsData.inFields[field] = {
        count: group.length,
        list: group.map((student) => student.firstname).join(', '),
      };
    }

    return studentsData;
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    } else {
      throw error;
    }
  }
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const databaseFileName = process.argv[2];
    const studentsData = await countStudents(databaseFileName);

    // Construct a response for the client
    let response = 'This is the list of our students\n';
    const numberOfStudents = studentsData.count;
    response += `Number of students: ${numberOfStudents}\n`;

    for (const field in studentsData.inFields) {
      if (field) {
        const listStudents = studentsData.inFields[field];
        response += `Number of students in ${field}: ${listStudents.count}. List: ${listStudents.list}\n`;
      }
    }
    res.send(response.trim());
  } catch (error) {
    const errorMessage = 'Cannot load the database';
    res.status(500).send(`This is the list of our students\n${errorMessage}`);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
