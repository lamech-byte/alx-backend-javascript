export default function cleanSet(set, startString) {
  const cleanedValues = [];
  for (const value of set) {
    if (value.startsWith(startString)) {
      cleanedValues.push(value.slice(startString.length));
    }
  }
  return cleanedValues.slice(0, 1).join('');
}
