const checkLength = require('./checkLength')
const filterLongNumbers = require('./filterLongNumbers')

describe('checkLength', (phoneNumber) => {
  it('should accept one argument without raising an error', () => {
    expect(() => {
      checkLength("1234567891");
    }).not.toThrow();
  });

  it('should return true if number is correct', () => {
    expect(checkLength("1234567891")).toBe(true);
  });

  it('should return false if number is incorrect', () => {
    expect(checkLength("1479873982798")).toBe(false);
  });

});

describe('filterLongNumbers', (array) => {
  it('should accept two arguments without raising an error', () => {
    expect(() => {
      filterLongNumbers(["1234567891", "1234567891"], checkLength);
    }).not.toThrow();
  });

  it('should return false if number is incorrect', () => {
    expect(filterLongNumbers(["1234567891", "1234567891"])).toEqual(["1234567891", "1234567891"]);
  });

  it('should filter out wrong numbers', () => {
    expect(filterLongNumbers(["1234567891", "1234567891", "1479873982798"])).toEqual(["1234567891", "1234567891"]);
  });

});