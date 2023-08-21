const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

app.use((req, res) => {
  res.status(404).send(`Cannot GET ${req.originalUrl}\n`);
});

app.listen(1245, () => {
  console.log('Server is running and listening on port 1245');
});

module.exports = app;
