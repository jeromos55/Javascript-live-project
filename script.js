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
};

// const arr = [3, 4, 5];
// console.log(arr);

// const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArray);

// // insert elements before the array
// const newArray = [1, 2, ...arr];
// console.log(newArray);

// // without the spread operator
// const withoutSpread = [1, 2, arr];
// console.log(withoutSpread); // the array contains another array

// // print array elements invidually
// console.log(...newArray);

// // insert elements behind the array
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // copy array
// const mainMenu = [...restaurant.mainMenu];
// console.log(mainMenu);

// // join 2 array
// const joinedMenu = [...restaurant.mainMenu, ...newMenu];
// console.log(joinedMenu);

// // iterables: arrays, strings, maps, sets, NOT objects
// const str = 'John';
// const letters = [...str, ' ', 'S.'];
// console.log(letters);
// console.log(...str);

// // real world example
// const ingredients = [
//   prompt("Let's make pasta! Ingredients 1"),
//   prompt('Ingredient 2'),
//   prompt('Ingredient 3'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// // objects
// const newRestaurant = { foundedIn: 1989, ...restaurant, founder: 'Guiseppe' };

// const copyRestaurant = { ...newRestaurant };
// copyRestaurant.name = 'Restaurant Roma';
// console.log(restaurant.name);
// console.log(copyRestaurant.name);

// SPREAD because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);
