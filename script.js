'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const renderCountry = function (data, className = '') {
//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flags.png}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name.common}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)}M people</p>
//       <p class="country__row"><span>🗣️</span>${
//         data.languages[Object.keys(data.languages)[0]]
//       }</p>
//       <p class="country__row"><span>💰</span>${
//         data.currencies[Object.keys(data.currencies)[0]].name
//       }</p>
//     </div>
//   </article>
//   `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
//   //countriesContainer.style.opacity = 1;
// };

// const getJSON = function (url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
//     return response.json();
//   });
// };

// const getCountryData = function (country) {
//   //country 1
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbors = data[0].borders[0];

//       if (!neighbors) throw new Error('No neighbors found!');

//       //country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbors}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     .catch(err => {
//       renderError(`Something went wrong! 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

//------ Event loop practice 01 ------
// console.log('Test start');
// setTimeout(() => console.log('0'), 0);
// Promise.resolve('Resolved promise 1').then(res => console.log(res));
// console.log('Test end');

//------ Event loop practice 02 ------

// console.log('Test start');
// setTimeout(() => console.log('0'), 0);
// Promise.resolve('Resolved promise 2').then(res => {
//   for (let i = 0; i < 1000000000; i++) {}
//   console.log(res);
// });
// console.log('Test end');

//------ Building a simple promise ------

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log('Lottery draw is happening');
//   if (Math.random() > 0.5) {
//     resolve('You won the lottery!');
//   } else {
//     reject(new Error('You lost the lottery :('));
//   }
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

//------ Promisifying setTimeout ------

// const wait = function (second) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, second * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log('I waited 1 seconds');
//     return wait(2);
//   })
//   .then(() => {
//     console.log('I waited 2 seconds');
//     return wait(2);
//   })
//   .then(() => {
//     console.log('I waited 3 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I waited 4 seconds'));

//------ Promise example ------

Promise.resolve('I got resolved').then(res => console.log(res));
Promise.reject('I got rejected').catch(err => console.error(err));
