// Guardrail function
// Accepts one argument: mathFunction (Function)
export default function guardrail(mathFunction) {
  // Create an array named queue
  const queue = [];

  try {
    // Execute the mathFunction and append the returned value to the queue
    const result = mathFunction();
    queue.push(result);
  } catch (error) {
    // If an error is thrown, append the error message to the queue
    queue.push(error.message);
  } finally {
    // Append the message "Guardrail was processed" to the queue
    queue.push('Guardrail was processed');
  }

  // Return the queue array
  return queue;
}
