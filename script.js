// importing module
import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

console.log('importing module');

import * as ShoppingCart from './shoppingCart.js'; // import as an object

addToCart('shoes', 1);
console.log(price, tq);

ShoppingCart.addToCart('socks', 1);
console.log(ShoppingCart.totalPrice, ShoppingCart.totalQuantity);

import add from './shoppingCart.js'; // import only one thing from a module
add('bread', 20);

import add2, { cart } from './shoppingCart.js';

add2('bread', 20);
add2('shoes', 1);
add2('socks', 1);
console.log(cart);

// await breaks the process until fetching
// console.log('start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return { title: data.at(-1).title, body: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// not very clear
lastPost.then(data => console.log(data));

// this better and more efficient
const lastPost2 = await getLastPost();
console.log(lastPost2);
