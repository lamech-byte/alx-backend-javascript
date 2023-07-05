export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const departmentEmployees of reportWithIterator) {
    for (const employeeName of departmentEmployees) {
      result += employeeName + ' | ';
    }
  }

  // Remove the trailing ' | ' from the result
  result = result.slice(0, -3);

  return result;
}
