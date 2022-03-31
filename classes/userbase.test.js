const UserBase = require('./userbase')
const User = require('./user')
// M - I intend to use mocks, but for now use a comment with M to signify anywhere where mocks would be ideal

describe('UserBase', (users) => {
  it('should accept an array of users as an argument', () => {
    const users = [
      new User('Uma'),
      new User('Josh'),
      new User('Ollie')
    ];

    expect(() => {
      new UserBase(users);
    }).not.toThrow();
  });

  it('should return user names in an array when .getNames is called', () => {
    const users = [
      new User('Uma'),
      new User('Josh'),
      new User('Ollie')
    ];

    const userbase = new UserBase(users);
    expect(userbase.getNames()).toEqual(['Uma', 'Josh', 'Ollie'])
  });

  it('should return an array of introductions when .getIntroductions is called', () => {
    const users = [
      new User('Uma'),
      new User('Josh'),
      new User('Ollie')
    ];

    const userbase = new UserBase(users);
    expect(userbase.getIntroductions()).toEqual(['Hi, my name is Uma', 'Hi, my name is Josh', 'Hi, my name is Ollie'])
  
  });

});