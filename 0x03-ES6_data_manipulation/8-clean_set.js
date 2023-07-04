export default function cleanSet(set, startString) {
  const values = Array.from(set);
  if (startString === '') {
    return values.join('-');
  }
  const filteredValues = values.filter((value) => value.startsWith(startString));
  const cleanedValues = filteredValues.map((value) => value.slice(startString.length));
  return cleanedValues.join('-');
}
