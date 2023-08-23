const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome to Holberton School, what is your name?");

rl.on('line', (input) => {
  const trimmedInput = input.trim();
  if (trimmedInput === "") {
    rl.close();
  } else {
    console.log(`Your name is: ${trimmedInput}`);
  }
});

rl.on('close', () => {
  console.log("This important software is now closing");
});
