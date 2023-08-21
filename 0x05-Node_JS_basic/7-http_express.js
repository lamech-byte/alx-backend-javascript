const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

app.get('/students', async (req, res) => {
  try {
    const result = await countStudents(process.argv[2]);
    res.send(`This is the list of our students\n${result}\n`);
  } catch (error) {
    res.send(`This is the list of our students\n${error}\n`);
  }
});

app.listen(1245, () => {
  console.log('Server is running and listening on port 1245');
});

module.exports = app;
