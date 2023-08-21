const express = require('express');
const app = express();
const routes = require('./routes');

const PORT = 1245;
const DB_FILENAME = process.argv[2]; // Retrieve database filename from command line

// Middleware to attach database filename to the request object
app.use((req, res, next) => {
  req.dbFilePath = DB_FILENAME;
  next();
});

// Use routes
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server is running and listening on port ${PORT}`);
});

export default app;
