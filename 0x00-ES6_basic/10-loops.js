export default function appendToEachArrayValue(array, appendString) {
  const modifiedArray = [];

  for (let i = 0; i < array.length; i++) {
    modifiedArray.push(appendString + array[i]);
  }

  return modifiedArray;
}
