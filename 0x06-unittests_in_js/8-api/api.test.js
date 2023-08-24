const expect = require('chai').expect;
const request = require('request');

describe('Index page', function() {
  it('should return correct status code and result', function(done) {
    request('http://localhost:7865', function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  it('should log "API available on localhost port 7865"', function(done) {
    const consoleLogStub = console.log;
    console.log = function(message) {
      expect(message).to.equal('API available on localhost port 7865');
      done();
    };
    require('./api'); // Start the server to trigger the console log
    console.log = consoleLogStub; // Restore the original console.log
  });
});
