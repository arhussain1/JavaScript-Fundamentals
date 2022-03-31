const Candy = require('./candy')
describe('Candy', (name, price) => {
  it('should accept 2 arguments name and price', () => {
    expect(() => {
      new Candy('Mars', 4.99);
    }).not.toThrow();
  });

  it('should return the candys name when .name is called', () => {
    candy = new Candy('Mars', 4.99);
    expect(candy.getName()).toEqual('Mars')
  });

  it('should return the candys price when .price is called', () => {
    candy = new Candy('Mars', 4.99);
    expect(candy.getPrice()).toEqual(4.99)
  });

});