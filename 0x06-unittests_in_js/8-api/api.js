const expect = require('chai').expect;
const request = require('request');
const { exec } = require('child_process');

describe('Index page', function () {
  let serverProcess;

  before(function (done) {
    // Start the server as a separate process
    serverProcess = exec('node api.js');
    // Wait for a short time to ensure the server is up and running
    setTimeout(() => done(), 1000);
  });

  after(function () {
    // Kill the server process after the tests are done
    serverProcess.kill();
  });

  it('should return correct status code and result', function (done) {
    request('http://localhost:7865', function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should log "API available on localhost port 7865"', function (done) {
    const consoleLogStub = console.log;
    console.log = function (message) {
      expect(message).to.equal('API available on localhost port 7865');
      done();
    };
    // Trigger the console log by making a request to the server
    request('http://localhost:7865', function (error, response, body) {
      // This request doesn't need any assertion, it's just to trigger the log
    });
    console.log = consoleLogStub; // Restore the original console.log
  });
});
