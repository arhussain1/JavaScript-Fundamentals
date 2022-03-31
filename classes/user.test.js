const User = require('./user')

describe('User', (name) => {
  it('should accept a single name as an argument', () => {
    expect(() => {
      new User('Uma');
    }).not.toThrow();
  });

  it('should return the users name when .name is called', () => {
    user = new User('Uma');
    expect(user.getName()).toEqual('Uma')
  });

  it('should return an introduction when .getIntroduction is called', () => {
    user = new User('Uma');
    expect(user.getIntroduction()).toEqual('Hi, my name is Uma')
  });

});