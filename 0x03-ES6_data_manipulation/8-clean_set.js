export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const result = Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');

  return result;
}
