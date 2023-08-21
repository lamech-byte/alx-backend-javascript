const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const data = await readDatabase(req.dbFilePath);
      // Process data to display the required information
      // Example: "Number of students in CS: 6. List: Johann, Arielle, ..."
      const formattedData = ...;
      res.status(200).send(`This is the list of our students\n${formattedData}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const data = await readDatabase(req.dbFilePath);
      // Process data to display the list of first names for the specified major
      // Example: "List: Guillaume, Joseph, Paul, Tommy"
      const formattedData = ...;
      res.status(200).send(`List: ${formattedData}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
