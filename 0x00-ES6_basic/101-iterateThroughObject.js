export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  for (const departmentEmployees of reportWithIterator) {
    for (const employeeName of departmentEmployees) {
      employeeNames.push(employeeName);
    }
  }

  return employeeNames.join(' | ');
}
