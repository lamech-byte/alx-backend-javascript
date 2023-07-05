export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const departmentEmployees of reportWithIterator) {
    result += employeeNames + ' | ';
  }

  // Remove the trailing ' | ' from the result
  result = result.slice(0, -3);

  return result;
}
