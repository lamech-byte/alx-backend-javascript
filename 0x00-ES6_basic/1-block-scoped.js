export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // You can't reassign a new value to a const variable
    // Instead, you can use a different variable name inside the conditional block
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
