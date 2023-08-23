const expect = require('chai').expect;
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  let consoleLogSpy;

  beforeEach(function() {
    // Create a spy on console.log before each test
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    // Restore the spy on console.log after each test
    consoleLogSpy.restore();
  });

  it('should log the correct message for totalAmount = 100 and totalShipping = 20', function() {
    sendPaymentRequestToApi(100, 20);
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('should log the correct message for totalAmount = 10 and totalShipping = 10', function() {
    sendPaymentRequestToApi(10, 10);
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 20')).to.be.true;
  });
});
