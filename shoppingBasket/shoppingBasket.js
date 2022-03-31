
class ShoppingBasket {
  constructor() {
    this.itemsInBasket = []
    this.totalPrice = 0
  }

  getTotalPrice() {
    return this.totalPrice;
  }
  
  addItem(item) {
    this.itemsInBasket.push(item);
    this.updateTotalPrice(item);
    return this.itemsInBasket;
  }
  
  updateTotalPrice(addedItem) {
    this.totalPrice += addedItem.getPrice();
  }
}

module.exports = ShoppingBasket;