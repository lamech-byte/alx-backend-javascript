const fs = require('fs').promises;

const readDatabase = async (filePath) => {
  try {
    const fileContent = await fs.readFile(filePath, 'utf-8');
    // Process fileContent to create an object of arrays of first names per fields
    // Example: { CS: ['Johann', 'Arielle', ...], SWE: ['Guillaume', ...], ... }
    return processedData;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = { readDatabase };
