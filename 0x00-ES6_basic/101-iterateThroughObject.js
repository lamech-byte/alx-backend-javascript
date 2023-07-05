export default function iterateThroughObject(reportWithIterator) {
  const employeeNames = [];

  for (const departmentEmployees of reportWithIterator) {
    employeeNames += departmentEmployees + ' | ';
  }

  return employeeNames.slice(0, -3);
}
