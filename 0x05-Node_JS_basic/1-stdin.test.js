const { spawn } = require('child_process');

describe('1-stdin.js', () => {
  it('should display name and handle exit', (done) => {
    const process = spawn('node', ['1-stdin.js'], { stdio: 'pipe' });

    const expectedOutput = [
      'Welcome to Holberton School, what is your name?',
      'Your name is: Alice\n',
      'Your name is: Bob\n',
      'This important software is now closing\n'
    ];

    let currentIndex = 0;

    process.stdout.on('data', (data) => {
      expect(data.toString()).toBe(expectedOutput[currentIndex]);
      currentIndex++;

      if (currentIndex === expectedOutput.length) {
        process.stdin.write('exit\n');
      }
    });

    process.on('exit', (code) => {
      expect(code).toBe(0);
      done();
    });
  });
});
