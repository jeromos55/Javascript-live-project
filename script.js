'use strict';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const openingHours = {
  [weekdays[4]]: {
    open: 12,
    close: 22,
  },
  [weekdays[5]]: {
    open: 11,
    close: 23,
  },
  // [`day-${2 + 4}`]: {
  //   open: 0,
  //   close: 24,
  // },
  [weekdays[`${2 + 4}`]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(inc1, inc2, inc3) {
    console.log(
      `Here is your delicious pasta with ${inc1}, ${inc2} and ${inc3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

console.log(restaurant.openingHours.mon);
// console.log(restaurant.openingHours.mon.open); // this is error message because itn't exist

if (restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open); // this is not print because above
}

if (restaurant.openingHours.Fri) {
  console.log(restaurant.openingHours.Fri.open); // 11 because Fri is exist
}

if (restaurant.openingHours && restaurant.openingHours.Fri) {
  console.log(restaurant.openingHours.Fri.open); // 11 because Fri is exist
}

// WIIH optional chaining
console.log(restaurant.openingHours.mon?.open); // it's undefined if not exist mon
console.log(restaurant.openingHours?.mon?.open); // it's undefined if not exist mon and openingHours

// Example
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
for (const day of days) {
  // console.log(day);
  //const open = restaurant.openingHours[day]?.open || 'colsed'; // It isn't correct because the 0 is falsely, so we get 'closed' here
  const open = restaurant.openingHours[day]?.open ?? 'colsed'; // now ?? is coorecting the problem and we get 0 here
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist!');
console.log(restaurant.orderXXX?.(0, 1) ?? 'Method does not exist!');

// Arrays
const users = [{ name: 'John' }, { email: 'hello@john.io' }];
console.log(users[0]?.name ?? "User array item isn't present!");
console.log(users[0]?.nameXXX ?? "User array item isn't present!");

// this same as above but there are simple and smart for using for arrays
if (users.length < 0) {
  console.log(users[0]?.name);
} else {
  console.log("User array item isn't present!");
}
