'use strict';

// DOM
console.log('--- DOM ---');
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSelection = document.querySelectorAll('.section');
console.log(allSelection);

document.getElementById('section--1');
const allButton = document.getElementsByTagName('button');
console.log(allButton);

console.log(document.getElementsByClassName('btn'));

// creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// --- only text content ---
// message.textContent =
//   'We used cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// --- with html content ---
message.innerHTML =
  'We used cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.prepend(message); // add message before to the header
// header.append(message); // add message after to the header
// header.prepend(message.cloneNode(true));

// header.before(message);
// header.after(message);

// deleting elements

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  // message.remove();
  // message.parentNode.removeChild(message);
  message.parentElement.removeChild(message);
});

// styles
console.log('--- styles ---');

message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height); // not log anything
console.log(message.style.color); // not log anything
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 50 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// attributes
console.log('--- attributes ---');

const logo = document.querySelector('.nav__logo');

console.log(logo.getAttribute('src'));
console.log(logo.hasAttribute('src'));
console.log(logo.src);

console.log(logo.getAttribute('alt'));
console.log(logo.hasAttribute('alt'));
console.log(logo.alt);

console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// non-standard attributes
console.log('--- non-standard attributes ---');

console.log(logo.getAttribute('designer'));

logo.setAttribute('company', 'Bankist');
console.log(logo.getAttribute('company'));

console.log(logo.src); // absolute path
console.log(logo.getAttribute('src')); // relative path

const link = document.querySelector('.twitter-link');
console.log(link.href);
console.log(link.getAttribute('href'));

const link2 = document.querySelector('.nav__link--btn');
console.log(link2.href);
console.log(link2.getAttribute('href'));

// data attribute
console.log('--- data attribute ---');

console.log(logo.dataset.versionNumber);

/**
 * Adds and removes classes from the logo element to toggle styling.
 * Checks if logo contains 'c' class.
 *
 * Notes:
 * - Avoid directly modifying .className, as it overwrites all existing classes.
 * - Prefer using .classList for managing classes instead.
 **/

// classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

// don't use
// logo.className = 'John'; // because this overwrites all the classes

// scrolling
console.log('--- scrolling ---');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  // console.log(
  //   'Current scroll position:',
  //   window.pageXOffset,
  //   window.pageYOffset
  // );

  // console.log('height/width:', window.innerHeight, window.innerWidth);
  // console.log('scroll height/width:', window.scrollY, window.scrollX);

  console.log(
    'height/width viewport:',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // window.scrollTo(s1coords.left, s1coords.top);
  // It works relatively to the viewport

  // window.scrollTo(
  //   s1coords.left + window.scrollX,
  //   s1coords.top + window.scrollY
  // );
  // It works relatively to the document

  // window.scrollTo({
  //   left: s1coords.left + window.scrollX,
  //   top: s1coords.top + window.scrollY,
  //   behavior: 'smooth',
  // });
  // this is an old way to do it, but it's still working

  section1.scrollIntoView({ behavior: 'smooth' });
});

// events
console.log('--- events ---');

const h1 = document.querySelector('h1');

// hover
// h1.addEventListener('mouseenter', function (e) {
//   alert('addeventListener: Great! You are reading the heading :D');
// });

// the mouse events reference is here: https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading :D');
// };

// same as event but it works ones because it remove the event listener
// const alertH1 = function (e) {
//   alert('Great! You are reading the heading :D');
//   h1.removeEventListener('mouseenter', alertH1);
// };

// h1.addEventListener('mouseenter', alertH1);

// but not need remove event listener immediately only later
// const alertH1 = function (e) {
//   alert('Great! You are reading the heading :D');

// };

// h1.addEventListener('mouseenter', alertH1);

// setTimeout( () => {
//   h1.removeEventListener('mouseenter', alertH1);
// }, 3000);

// onclick example in the html file

//-----------------------------------
// event propagation in practice
// ----------------------------------

// const randomInt = (max, min) =>
//   Math.floor(Math.random() * (max - min + 1) + min);

// const randomColor = () =>
//   `rgb(${randomInt(255, 0)}, ${randomInt(255, 0)}, ${randomInt(255, 0)})`;
// console.log(randomColor());

// // e.target same as everywhere and e.currentTarget different everywhere
// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);

//   // stop propagation
//   e.stopPropagation(); // the events not working the other events only here
// });

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     this.style.backgroundColor = randomColor();
//     console.log('NAV', e.target, e.currentTarget);
//   },
//   true // true for capturing phase and this even will works
// );

//-----------------------------------
// page navigation
// ----------------------------------

// this is not the best solution because we add event listener all nav links

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. add event listener to common parent element
// 2. determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// dom traversing
const h1Tag = document.querySelector('h1');
// going  downward: children
console.log(h1Tag.querySelectorAll('.highlight'));
console.log(h1Tag.childNodes);
console.log(h1Tag.children);
// h1Tag.firstElementChild.style.color = 'white';
// h1Tag.lastElementChild.style.color = 'orangered';

// going upward: parents
console.log(h1Tag.parentNode);
console.log(h1Tag.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.transform = 'scale(0.2)';
//   }
// });

// tabbed component
const tabs = document.querySelectorAll('.operations__tab');

const tabsContainer = document.querySelector('.operations__tab-container');

const tabsContent = document.querySelectorAll('.operations__content');

// not the best solution because the all of the tabs will have a same event listener
// tabs.forEach((t) => t.addEventListener('click', () => console.log('TAB')));

tabsContainer.addEventListener('click', (e) => {
  // const clicked = e.target.parentElement;
  const clicked = e.target.closest('.operations__tab');

  // guard clause
  if (!clicked) return;

  // remove active classes
  tabs.forEach((t) => t.classList.remove('operations__tab--active'));
  tabsContent.forEach((c) => c.classList.remove('operations__content--active'));

  // active tab
  clicked.classList.add('operations__tab--active');

  // activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// menu fade animation
const nav = document.querySelector('.nav');

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const sibling = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    sibling.forEach((el) => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

// ------------------------------------------------------------
// | sticky navigation                                        |
// ------------------------------------------------------------
// const initialCoord = section1.getBoundingClientRect();
// console.log(initialCoord);

// window.addEventListener('scroll', (e) => {
//   if (window.scrollY > initialCoord.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// ------------------------------------------------------------
// | sticky navigation: Intersection observer API 1           |
// ------------------------------------------------------------

// const callBack = function (entries, observer) {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       nav.classList.add('sticky');
//     } else {
//       nav.classList.remove('sticky');
//     }
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(callBack, obsOptions);
// observer.observe(section1);

// ------------------------------------------------------------
// | sticky navigation: Intersection observer API 2           |
// ------------------------------------------------------------

// const header = document.querySelector('.header');  // this is already was declared above

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// reveal sections with intersectionObserver API

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

// lazy loading images

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry.target);
  if (!entry.isIntersecting) return;

  // replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imagesObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
});

imgTargets.forEach((img) => imagesObserver.observe(img));

// slides
const sliders = function () {
  const slides = document.querySelectorAll('.slide');

  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');

  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length - 1;

  const createDots = () => {
    slides.forEach((_, i) => {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach((dot) => dot.classList.remove('dots__dot--active'));
    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  slides.forEach((s, i) => (s.style.transform = `translateX(${i * 100}%)`)); // 0%, 100%, 200%, 300%

  const gotoSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
    );
  };

  // next slide
  const nextSlide = function () {
    maxSlide === curSlide ? (curSlide = 0) : curSlide++;
    gotoSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    curSlide === 0 ? (curSlide = maxSlide) : curSlide--;
    gotoSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    gotoSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      gotoSlide(slide);
      activateDot(slide);
    }
  });
};
sliders();

// lifecycle DOM events
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

// document.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   console.log('Leaving the page', e);
//   e.returnValue = '';
// });
