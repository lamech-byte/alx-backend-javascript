export default function iterateThroughObject(reportWithIterator) {
  let result = '';

  for (const employee of Object.values(reportWithIterator)) {
    result += `${employee} | `;
  }

  return result.slice(0, -3);
}
