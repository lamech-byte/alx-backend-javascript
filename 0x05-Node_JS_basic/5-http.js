const http = require('http');
const countStudents = require('./3-read_file_async');

// Extract the database filename from command-line arguments
const args = process.argv.slice(2);
const databaseFileName = args[0];

// Create the HTTP server
const app = http.createServer((req, res) => {
  const { url } = req;

  if (url === '/') {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response
    res.end('Hello Holberton School!\n');
  } else if (url === '/students') {
    // Set the response header
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Call the countStudents function with the database filename
    countStudents(databaseFileName)
      .then(() => {
        res.end('This is the list of our students\n');
      })
      .catch((error) => {
        res.end(error.message + '\n');
      });
  } else {
    // Set the response header for unknown routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });

    // Send the response
    res.end('Not Found\n');
  }
});

// Listen on port 1245
app.listen(1245, () => {
  console.log('Server is running and listening on port 1245');
});

// Export the app
module.exports = app;
