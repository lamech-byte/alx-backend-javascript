export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // Cannot reassign new values to task and task2 here
    // Instead, you can return new values directly

    return [false, false];
  }

  return [task, task2];
}
