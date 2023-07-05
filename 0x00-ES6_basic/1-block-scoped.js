export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    const taskInsideBlock = true;
    const task2InsideBlock = false;

    task = taskInsideBlock;
    task2 = task2InsideBlock;
  }

  return [task, task2];
}
