export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  for (const departmentEmployees of reportWithIterator) {
    for (const employee of departmentEmployees) {
      employeeNames.push(employee);
    }
  }

  return employeeNames.join(' | ');
}
