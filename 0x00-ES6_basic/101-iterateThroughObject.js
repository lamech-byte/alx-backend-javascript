export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  for (const departmentEmployees of reportWithIterator) {
    employeeNames.push(...departmentEmployees);
  }

  return employeeNames.join(' | ');
}
