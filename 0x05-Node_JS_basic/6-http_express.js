const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!\n');
});

app.get('*', (req, res) => {
  res.status(404).send(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>Cannot GET ${req.url}</pre>
</body>
</html>`);
});

app.listen(1245, () => {
  console.log('Server is running and listening on port 1245');
});

module.exports = app;
