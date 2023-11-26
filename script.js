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
};

// const arr = [2, 3, 4];
// var a = arr[0];
// var b = arr[1];
// var c = arr[2];

// // simpler way to destructing
// const [x, y, z] = arr;

// console.log(arr);
// console.log(a, b, c);
// console.log(x, y, z);

// // first two variables
// var [first, second] = restaurant.categories;
// console.log(first, second);

// // first and third variables
// var [first2, , second2] = restaurant.categories;
// console.log(first2, second2);

// // switching variables
// var temp = first;
// first = second;
// second = temp;

// console.log(first, second);

// // same as above switching variables but this is simplier
// [first2, second2] = [second2, first2];
// console.log(first2, second2);

// console.log(restaurant.order(2, 0));

// //create new variables
// let [newFirst, newSecond] = restaurant.order(2, 0);
// console.log(newFirst, newSecond);

// // destructing nested array
// const nested = [2, 3, [4, 5]];
// var [first, , second] = nested;
// console.log(first, second);

// var third;
// var [first, , [second, third]] = nested;
// console.log(first, second, third);

// // default values

// var [p, q, r] = [8, 9];
// console.log(p, q, r); // r = default

// var [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // r = 1

// var [p = 1, q = 1, r = 1] = [8];
// console.log(p, q, r); // q =1 and r =1

// // destructing objects
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // mutating variables
// var a = 111;
// var b = 222;
// const obj = { a: 23, b: 7, c: 14 };

// // {a, b} = obj; // this is send an error message
// ({ a, b } = obj); // this is a solvation
// console.log(a, b);

// // nested object destruction
// var { fri } = restaurant.openingHours; // or only openingHours because we above destructing the restaurant object
// console.log(fri);

// var {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// // or

// var {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// // typically use the function
// restaurant.orderDelivery({
//   time: '13:00',
//   address: 'Via del sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({ address: 'Via del sole, 21', starterIndex: 1 });

const arr = [3, 4, 5];
console.log(arr);

const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newArray = [1, 2, ...arr];
console.log(newArray);

// without the spread operator
const withoutSpread = [1, 2, arr];
console.log(withoutSpread); // the array contains another array

// print array elements invidually
console.log(...newArray);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);
