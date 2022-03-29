
const fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', () => {
  it('should return "Fizz" when the number 3 is passed', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
  });

  it('should return "Buzz" when the number 20 is passed', () => {
    expect(fizzbuzz(20)).toBe('Buzz');
  });

  it('should return "FizzBuzz" when the number 15 is passed', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  });

  it('should return the number 4 when the number 4 is passed', () => {
    expect(fizzbuzz(4)).toBe(4);
  });
});