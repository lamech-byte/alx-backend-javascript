const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome to Holberton School, what is your name?");

rl.on('line', (input) => {
  const trimmedInput = input.trim();
  if (trimmedInput === "") {
    console.log("This important software is now closing");
    rl.close();
  } else {
    console.log(`Your name is: ${trimmedInput}`);
    rl.close(); // Close the interface after processing the input
  }
});
