/*
 * Create a small HTTP server using the http module.
 */

const http = require('http');

// Listen on port 1245
const port = 1245;
const host = 'localhost';

// Create the HTTP server
// Send the response
const app = http.createServer((req, res) => {
  const body = 'Hello Holberton School!';

  // Set the response header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

// Export the app
module.exports = app;
