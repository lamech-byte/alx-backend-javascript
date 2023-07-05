export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // You can't reassign a new value to a const variable
    // Instead, you can use a different variable name inside the conditional block
    const task = true;
    const task2 = false;

    task = task;
    task2 = task2;
  }

  return [task, task2];
}
