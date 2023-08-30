const fs = require('fs').promises;

// Read the database asynchronously and return a Promise
const readDatabase = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
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

    return studentGroups;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = { readDatabase };
