// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

// IIFE
var myFunc = (function () {
  var name = 'bob';
  return function() {
    console.log(name);    
  }
})();

myFunc();

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let counter = 0;
  return function () {
    counter += 1; 
    return counter;
  }
};
// Example usage: 
// const newCounter = counter();
// console.log(newCounter()); // 1
// console.log(newCounter()); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.

  let counter = 0;
  return {
    increment() {
      counter += 1; 
      return counter;
    },
    decrement() {
      counter -= 1; 
      return counter;
    }
  }

};

const advCounter = counterFactory();
console.log(advCounter.increment()); // 1
console.log(advCounter.increment()); // 2
console.log(advCounter.decrement()); // 1