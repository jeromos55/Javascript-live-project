'use strict';

let arr = ['a', 'b', 'c', 'd', 'e'];

// slice
console.log('--- slice ---');
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log(arr.slice([...arr]));

// splice

console.log('--- splice ---');
// console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);
console.log(arr.splice(1, 2));
console.log(arr);

// reverse
console.log('--- reverse ---');
arr = ['i', 'h', 'g', 'f', 'e'];
console.log(arr.reverse());
console.log(arr);

// conacat
let arr2 = ['a', 'b', 'c', 'd'];
console.log('--- concat ---');
console.log(arr2.concat(arr));
console.log([...arr2, ...arr]);

// join
console.log('--- join ---');
console.log(arr2.concat(arr).join('-'));

// at
console.log('--- at ---');
arr2 = [23, 11, 64];
console.log(arr2);
console.log(arr2[0]);
console.log(arr2.at(0));

// get last array element
console.log('--- last element ---');
console.log(arr);
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);

console.log('John'.at(0));
console.log('John'.at(-1));
