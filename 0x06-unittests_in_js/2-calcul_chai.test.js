const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
  describe('when type is SUM', function() {
    it('should return the sum of rounded numbers', function() {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
  });

  describe('when type is SUBTRACT', function() {
    it('should return the subtraction result of rounded numbers', function() {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });
  });

  describe('when type is DIVIDE', function() {
    it('should return the division result of rounded numbers', function() {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should return "Error" when b is rounded to 0', function() {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });

  it('should throw an error for invalid type', function() {
    expect(() => calculateNumber('INVALID_TYPE', 1.4, 4.5)).to.throw(/Invalid type/);
  });
});
