const express = require('express');
const countStudents = require('./3-read_file_async'); // Import the function from task 3

const app = express();
const port = 1245;

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a route for the /students endpoint
app.get('/students', async (req, res) => {
  try {
    const message = 'This is the list of our students\n';
    const response = await countStudents(process.argv[2]);
    const mergedResponse = message + response.trim();
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', Buffer.byteLength(mergedResponse));
    res.end(mergedResponse);
  } catch (error) {
    const message = 'This is the list of our students\n';
    res.setHeader('Content-Type', 'text/plain');
    res.status(500).send(message + error.message);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});

// Export the app
module.exports = app;
