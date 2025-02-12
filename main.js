const menu = {
  _meal: '',
  _price: 0,


  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      this._meal = mealToCheck;
    } else {
      console.log('Meal should be a string.');
    }
  },

  get todaysSpecial() {
    if (this._meal && this._price === true) {
      return `Today's Special is ${this.meal}}for $${this.price}`;
    } else {
      return  `Meal or price was not set correctly!`;
    }
  },

  set price (priceToCheck) {
    if(typeof priceToCheck === 'number') {
    this._price = priceToCheck;
  } else {
    console.log(menu);
    }
  }
};


menu.meal = 'chicken';
menu.price = 23;

console.log(menu.todaysSpecial);
