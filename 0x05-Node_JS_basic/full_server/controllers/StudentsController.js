const { readDatabase } = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const message = 'This is the list of our students\n';
      const studentData = await readDatabase(req.databaseFilePath);

      let response = message;
      Object.entries(studentData).forEach(([field, students]) => {
        const studentNames = students.map(student => student.firstname).join(', ');
        response += `Number of students in ${field}: ${students.length}. List: ${studentNames}\n`;
      });

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const major = req.params.major.toUpperCase();
      if (major !== 'CS' && major !== 'SWE') {
        res.status(500).send('Major parameter must be CS or SWE');
        return;
      }

      const studentData = await readDatabase(req.databaseFilePath);
      const studentsInMajor = studentData[major] || [];
      const studentNames = studentsInMajor.map(student => student.firstname).join(', ');

      const message = `List: ${studentNames}\n`;
      res.status(200).send(message);
    } catch (error) {
      res.status(500).send(`${error.message}`);
    }
  }
}

module.exports = StudentsController;
