const searchEngine = require('./searchEngine')

describe('searchEngine', (searchString, maximumPrice) => {
  it('should accept two arguments without raising an error', () => {
    expect(() => {
      searchEngine('Ma', 10);
    }).not.toThrow();
  });

  it('should return Aero when given correct search parameters', () => {
    expect(searchEngine('Aero', 5)).toEqual(['Aero'])
  });

  it('should be able to filter when given a partial prefix for the search term', () => {
    expect(searchEngine('Ma', 10)).toEqual(['Mars', 'Maltesers'])
  });

  it('should only show Mars when given string "Ma" and a maximum price of 3', () => {
    expect(searchEngine('Ma', 3)).toEqual(['Mars'])
  });

  it('should also be able to handle searches in lowercase', () => {
    expect(searchEngine('ma', 10)).toEqual(['Mars', 'Maltesers'])
  });

});