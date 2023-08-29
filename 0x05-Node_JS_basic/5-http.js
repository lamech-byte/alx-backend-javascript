/**
 * creating a more complex HTTP server using Node.js's built-in http module.
 */

const http = require('http');
const fs = require('fs').promises;

const port = 1245;
const host = 'localhost';
const file = process.argv[2];

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

    let response = '';
    const totalStudents = Object.values(studentGroups)
      .reduce((total, group) => total + group.length, 0);
    response += `Number of students: ${totalStudents}\n`;

    for (const [field, group] of Object.entries(studentGroups)) {
      const studentNames = group.map((student) => student.firstname).join(', ');
      response += `Number of students in ${field}: ${group.length}. List: ${studentNames}\n`;
    }

    return response;
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    } else {
      throw error;
    }
  }
};

const ROUTES = {
  '/': (req, res) => {
    const message = 'Hello Holberton School!';
    res.setHeader('Content-Type', 'text/plain');
    res.end(message);
  },
  '/students': async (req, res) => {
    try {
      const message = 'This is the list of our students\n';
      const response = await countStudents(file);
      const mergedResponse = message + response.trim();
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', Buffer.byteLength(mergedResponse));
      res.end(mergedResponse);
    } catch (error) {
      const message = 'This is the list of our students\n';
      res.setHeader('Content-Type', 'text/plain');
      res.writeHead(500);
      res.end(message + error.message);
    }
  },
};

const app = http.createServer(async (req, res) => {
  const route = ROUTES[req.url];
  if (route) {
    route(req, res);
  } else {
    res.setHeader('Content-Type', 'text/plain');
    res.writeHead(404);
    res.end('Invalid request');
  }
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});

module.exports = app;
