const { spawn } = require('child_process');

describe('1-stdin.js', () => {
  it('should display name and handle exit', (done) => {
    const scriptPath = '1-stdin.js';
    const input = 'John\n';
    const expectedOutput = [
      'Welcome to Holberton School, what is your name?\n',
      'Your name is: John\n',
      'This important software is now closing\n'
    ];

    const child = spawn('node', [scriptPath]);
    let currentIndex = 0;
    let receivedOutput = '';

    child.stdin.write(input);

    child.stdout.on('data', (data) => {
      receivedOutput += data.toString();

      if (receivedOutput === expectedOutput.join('')) {
        child.stdin.end();
      }
    });

    child.on('close', (code) => {
      expect(receivedOutput).toBe(expectedOutput.join(''));
      expect(code).toBe(0);
      done();
    });
  });
});
