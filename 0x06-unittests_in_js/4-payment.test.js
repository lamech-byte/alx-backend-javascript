const expect = require('chai').expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  it('should call Utils.calculateNumber with SUM type, a = 100, and b = 20', function() {
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;

    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;

    calculateNumberStub.restore(); // Restore the stub
    consoleLogSpy.restore(); // Restore the spy
  });
});
