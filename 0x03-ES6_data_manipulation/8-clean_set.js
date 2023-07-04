export default function cleanSet(set, startString) {
  const values = Array.from(set);
  const cleanedValues = values.reduce((result, value) => {
    if (value.startsWith(startString)) {
      result.push(value.slice(startString.length));
    }
    return result;
  }, []);
  return cleanedValues.join('-');
}
