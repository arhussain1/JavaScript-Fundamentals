const ShoppingBasket = require('./shoppingBasket')

describe('ShoppingBasket', () => {
  const candy1 = { getName: () => 'Mars', getPrice: () => 4.99 }
  const candy2 = { getName: () => 'Skittle', getPrice: () => 3.99 }
  let basket

  beforeEach(() => {
    basket = new ShoppingBasket();
  });

  it('should have a total price of 0 when created', () => {
    expect(basket.getTotalPrice()).toEqual(0)
  });

  it('should add candy object when addItem is passed a candy', () => {
    expect(basket.addItem(candy1)).toEqual([candy1])
  });

  it('should add 4.99 to the total price when Mars candy object is added', () => {
    basket.addItem(candy1)

    expect(basket.getTotalPrice()).toEqual(4.99)
  });

  it('should return total price of 12.97 when multiple candies are added to basket', () => {
    basket.addItem(candy1);
    basket.addItem(candy2);
    basket.addItem(candy2);

    expect(basket.getTotalPrice()).toEqual(12.97)
  });

});