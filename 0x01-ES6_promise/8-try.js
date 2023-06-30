// Divide function
// Accepts two arguments: numerator and denominator
export default function divideFunction(numerator, denominator) {
  // Check if the denominator is equal to 0
  if (denominator === 0) {
    // Throw a new error with the message "cannot divide by 0"
    throw new Error('cannot divide by 0');
  }

  // Return the result of dividing the numerator by the denominator
  return numerator / denominator;
}
