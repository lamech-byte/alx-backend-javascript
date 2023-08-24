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

  it('should log "API available on localhost port 7865"', function(done) {
    const consoleLogStub = console.log;
    console.log = function(message) {
      expect(message).to.equal('API available on localhost port 7865');
      console.log = consoleLogStub; // Restore the original console.log
      done();
    };
    require('./api'); // Start the server to trigger the console log
    // Delay the assertion for a brief moment
    setTimeout(() => {
      // Do nothing here, the assertion will be handled in the overridden console.log
    }, 100);
  });
});
