export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const employeeName of reportWithIterator) {
    result += employeeName + ' | ';
  }

  // Remove the trailing ' | ' from the result
  result = result.slice(0, -4);

  return result;
}
