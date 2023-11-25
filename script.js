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

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// simpler way to destructing
const [x, y, z] = arr;

console.log(arr);
console.log(a, b, c);
console.log(x, y, z);

// first two variables
var [first, second] = restaurant.categories;
console.log(first, second);

// first and third variables
var [first2, , second2] = restaurant.categories;
console.log(first2, second2);

// switching variables
var temp = first;
first = second;
second = temp;

console.log(first, second);

// same as above switching variables but this is simplier
[first2, second2] = [second2, first2];
console.log(first2, second2);

console.log(restaurant.order(2, 0));

//create new variables
let [newFirst, newSecond] = restaurant.order(2, 0);
console.log(newFirst, newSecond);

// destructing nested array
const nested = [2, 3, [4, 5]];
var [first, , second] = nested;
console.log(first, second);

var third;
var [first, , [second, third]] = nested;
console.log(first, second, third);

// default values

var [p, q, r] = [8, 9];
console.log(p, q, r); // r = default

var [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // r = 1

var [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r); // q =1 and r =1

// destructing objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);
