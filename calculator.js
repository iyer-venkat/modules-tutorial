import math, { sum, product } from "math";
// import sum from "math/sum";
// import product from "math/product";

console.log(sum([1, 2, 3, 4]), product([1, 2, 3, 4]));
console.log(math.sum([1, 2, 3, 4]), math.product([1, 2, 3, 4]));

// const debounce = (fn, timeDelay = 1000) => {
//   let fnTimer;
//   return (...args) => {
//     clearTimeout(fnTimer);
//     fnTimer = setTimeout(() => fn(...args), timeDelay);
//   };
// };

// const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
// const doSomething = (value) => console.log(new Date(), "DOING SOMETHING", value);
// const db = debounce(doSomething, 500);
// for (let i = 1; i <= 10; i++) {
//   console.log(new Date(), "CALLING #", i);
//   db(i);
//   await sleep(i === 5 || i === 8 ? 650 : 490);
// }
