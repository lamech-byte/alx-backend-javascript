const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
  describe('when type is SUM', function() {
    it('should return the sum of rounded numbers', function() {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('when type is SUBTRACT', function() {
    it('should return the subtraction result of rounded numbers', function() {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('when type is DIVIDE', function() {
    it('should return the division result of rounded numbers', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when b is rounded to 0', function() {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  it('should throw an error for invalid type', function() {
    assert.throws(() => calculateNumber('INVALID_TYPE', 1.4, 4.5), /Invalid type/);
  });
});
