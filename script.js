'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // returns an array containing  two elements
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  orderPasta: function (inc1, inc2, inc3) {
    console.log(
      `Here is your delicious pasta with ${inc1}, ${inc2} and ${inc3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

// Use any data type, return any data type, short-circuiting
console.log('--- OR ---');

console.log(3 || 'John'); // 3 is true so it's first operand 3
console.log('' || 'John'); // '' is a false value so it's second operand 'John'
console.log(true || 0); // true is true so it's first operand true
console.log(undefined || null); // undefined is false so it's second operand null
console.log(undefined || null || '' || 'Hello' || 23); // false, false, false, true, true
// undefined = false, null = false, '' = false, 'Hello' = true, so it's the first true the result is 'Hello'

console.log('----------');
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----------');

restaurant.numGuests = 23;
const guests3 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests3);

const guests4 = restaurant.numGuests || 10;
console.log(guests4);

console.log('--- AND ---');

console.log(0 && 'John');
console.log(7 && 'John');

console.log('John' && 23 && null && 'Hello'); // true, true, false, true
// 'John' = true, 23 = true, null = false, so it's the first false the result is null

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');
