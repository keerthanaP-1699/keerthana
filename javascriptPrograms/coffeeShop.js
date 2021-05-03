/**
 * create a Coffeeshop
 * create a class with constructors having the name of shop in string,
 * menu that contains item name,food r drinks and price.and the constructor will have a array to set the orders.
 * EXAMPLE:
 * const MyCoffeeShop = new CoffeeShop("Coffee Day",[
 *  {item:"veg noodles",type:"food",price:12.50}
 *  {item:"veg fried rice",type:"food",price:13.50}
 *  {item:"cold coffee",type:"drinks",price:10.50}
 *  ],[]);
 */

class CoffeeShop {
  constructor(name, menu, orders) {
    this.name = name;
    this.menu = menu;
    this.orders = orders;
  }

  /**
   * to add the item and check whether it is available in the menu
   * if available return order added else return item not available
   */

  addOrder(item) {
    const order = this.menu.find((el) => el.item == item);
    if (order) {
      this.orders.push(item);
      return "Order added!";
    } else {
      return "This item is currently unavailable!";
    }
  }

  /**
   * to list the order placed by the customer
   * MyCoffeeShop.listOrders()
   * returns as object of order
   * [{item:"lemon juice",type:"drinks",price:5.50}]
   */

  listOrders() {
    return this.orders;
  }

  /**
   * the amt to be paid that should contain only in 2decimal places
   * myCoffeeShop.dueAmount()
   * returns 12.50
   */

  dueAmount() {
    return +this.orders
      .map((el) => this.menu.find((ite) => ite.item == el))
      .reduce((s, e) => (s += e.price), 0)
      .toFixed(2);
  }

  /**
   * fullfillorder will check is any order is left r not.
   * if all the orders are given returns all orders are fulfilled
   * else return the *item name* is ready
   */

  fulfillOrder() {
    if (this.orders.length) {
      const fulfilled = this.orders[0];
      this.orders.shift();
      return "The " + fulfilled + " is ready!";
    } else {
      return "All orders have been fulfilled!";
    }
  }

  /**
   * to find cheapest item from the menu
   * MyCoffeeShop.cheapestItem()
   * returns cold coffee
   */

  cheapestItem() {
    let cheapest = this.menu.reduce((p, c) => (c.price < p.price ? c : p));
    return cheapest.item;
  }

  /**
   * To get all the drinks from the menu
   * MyCoffeeShop.drinksOnly()
   * return as object [ { item: 'cold coffee', type: 'drinks', price: 10.35 } ]
   */

  drinksOnly() {
    return this.menu
      .filter((drinks) => drinks.type == "drink")
      .map((drinks) => drinks.item);
  }

  /**
   * To get all the foods from the menu
   * MyCoffeeShop.foodOnly()
   * [ { item: 'Veg Noodles', type: 'food', price: 12.5 } ]
   */

  foodOnly() {
    return this.menu
      .filter((food) => food.type == "food")
      .map((food) => food.item);
  }
}

const MyCoffeeShop = new CoffeeShop(
  "Coffee Day",
  [
    { item: "Veg Noodles", type: "food", price: 12.5 },
    { item: "Veg Fried rice", type: "food", price: 13.5 },
    { item: "cold coffee", type: "drink", price: 10.35 },
  ],
  []
);

console.log(MyCoffeeShop.addOrder("pizza"));
/** 'This Item is currently unavailable' */

console.log(MyCoffeeShop.addOrder("cold coffee"));
/** Order added! */

console.log(MyCoffeeShop.listOrders());
/** [ { item: 'cold coffee', type: 'drinks', price: 10.35 } ] */

console.log(MyCoffeeShop.dueAmount());
/** 10.35 */

console.log(MyCoffeeShop.fulfillOrder());
/** The cold coffee is ready! */

console.log(MyCoffeeShop.fulfillOrder());
/** All Orders have been fulfilled! */

console.log(MyCoffeeShop.dueAmount());
/** 0 */

console.log(MyCoffeeShop.cheapestItem());
/** cold coffee */

console.log(MyCoffeeShop.drinksOnly());
/** [ { item: 'cold coffee', type: 'drinks', price: 10.35 } ] */

console.log(MyCoffeeShop.foodOnly());
/** [
 *  { item: 'Veg Noodles', type: 'food', price: 12.5 },
 *  { item: 'Veg Fried rice', type: 'food', price: 13.5 }
 * ]
 */
