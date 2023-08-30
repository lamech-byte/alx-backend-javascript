const express = require('express');

const app = express();
const port = 1245;

// Define a route for the root endpoint
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Define a default route for any other endpoint
app.use((req, res) => {
  res.status(404).send(`Cannot ${req.method} ${req.originalUrl}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});

// Export the app
module.exports = app;
