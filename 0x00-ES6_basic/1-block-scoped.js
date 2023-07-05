export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Cannot reassign new values to task and task2 here
    // Instead, you can return new values directly
    const task = true;
    const task3 = false;

    return [true, false];
  }

  return [task, task2];
}
