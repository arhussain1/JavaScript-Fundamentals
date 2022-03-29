const addToBatch = require('./addtobatch');


describe('addToBatch', (array, num) => {
  it('should accept two arguments without raising an error', () => {
    expect(() => {
      addToBatch([1, 2], 3);
    }).not.toThrow();
  });

  it('should add the num to the array and return the new array', () => {
    expect(addToBatch([1, 2], 3)).toEqual([1, 2, 3]);
  });

  it('should add the num to the array and return the new array', () => {
    expect(addToBatch([1, 2, 3, 4, 5], 6)).toEqual([1, 2, 3, 4, 5]);
  });

});