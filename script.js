// ------------ importing module --------------
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log('importing module');

//---------- import as an object --------------
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('shoes', 1);
// console.log(ShoppingCart.cart[0].product, ShoppingCart.cart[0].quantity);
// ShoppingCart.addToCart('bread', 5);
// ShoppingCart.cart.forEach(x => console.log(x.product, x.quantity));
// console.log(ShoppingCart);

//-------------- import only one thing from a module --------------
// import add from './shoppingCart.js';
// add('bread', 20);
// import add2, { cart } from './shoppingCart.js';
// add2('potato', 25);
// add2('shoes', 5);
// add2('socks', 2);
// console.log(
//   cart.forEach(element => {
//     console.log(element.product, element.quantity);
//   })
// );

//----------- await breaks the process -------------
// both await break the process until is done :(
// console.log('start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('end fetching');

//----------- async don't breaks the process -------------
// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();

//   return { title: data.at(-1).title, body: data.at(-1).body };
// };

// const lastPost = getLastPost();
// console.log(lastPost);

// // not very clear
// lastPost.then(data => console.log(data));

// // this better and more efficient
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// --------- The Module pattern --------------

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (shipping cost: ${shippingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
    shippingCost,
  };
})();

ShoppingCart2.addToCart('shoes', 3);
ShoppingCart2.addToCart('socks', 10);
console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);

// ------------- common.js ----------------

// // ------------- export module ----------------

// export const addToCartCommon = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(
//     `${quantity} ${product} added to cart (shipping cost: ${shippingCost})`
//   );
// };

// // ------------- import module ----------------

// const {addToCartCommon} = require('./shoppingCart.js');

//----------------- importing cloneDeep method from lodash ----------------

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 2 },
    { product: 'potato', quantity: 1 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
state.user.loggedIn = false;
console.log(state.user.loggedIn, stateClone.user.loggedIn);
// the  stateClone.user.loggedIn is false too because state and stateClone are the same object

const stateDeepClone = cloneDeep(state);
state.user.loggedIn = true;
console.log(state.user.loggedIn, stateDeepClone.user.loggedIn);
// the stateDeepClone.user.loggedIn is false because state and stateDeepClone are different objects
