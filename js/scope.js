//QUESTION 1:

/*
The output for question 1 is as shown below:

    undefined 
    8
    8
    9
    10
    1
*/

//QUESTION 2: Define Global Scope and Local Scope in JavaScript
var globalScope = 10;
function testFunction() {
  let localScope = 20;
  let scope = this;
  console.log(globalScope);
  console.log(localScope);
}
testFunction();

//QUESTION 3:
/**
 * 
a. Do statements in Scope A have access to variables defined in Scope B and C? 
No, Scope A has no access to variables defined in Scope B and C

b. Do statements in Scope B have access to variables defined in Scope A?
Yes, Scope B has access to variables defined in Scope A

c. Do statements in Scope B have access to variables defined in Scope C?
No, Scope B has no access to variables defined in Scope C

d. Do statements in Scope C have access to variables defined in Scope A?
Yes, Scope C has access to variables defined in Scope A

e. Do statements in Scope C have access to variables defined in Scope B?
Yes, Scope C has access to variables defined in Scope B
 */

//QUESTION 4:
/**
 *
 * The output for question 4 is as shown below:
 *
 *  81
 *  25
 */

//QUESTION 5:
/**
 *
 * The output for question 5 is as shown below:
 *
 *  alert of 10
 */

// var x = 5;
// var y = 7;
// function a() {
//   function b() {
//     console.log(`1: x=${x} y=${y}`);
//     y = 10;
//     return function c(y) {
//       console.log(`2: x=${x} y=${y}`);
//     };
//   }
//   console.log(`3: x=${x} y=${y}`);
//   var z = b();
//   var x = 10;
//   z(20);
// }
// console.log(`4: x=${x} y=${y}`);
// a();
// console.log(`5: x=${x} y=${y}`);

function shortest(x, y, z) {
  let shortest = arguments[0];
  for (let i of arguments) {
    if (i.length < shortest.length) {
      shortest = i;
    }
  }
  return shortest;
}
// console.log(shortest("John", "Mak", "Freddy"));
// let timer = setInterval(timerFunx, 10 * 60 * 1000);
// function timerFunx() {
//   alert("10 minutes have passed");
// }
// clearInterval(timer);
// function startTimer() {
//   setInterval(function () {
//     alert("10 minutes have passed");
//   }, 10 * 60 * 1000);
// }
// startTimer();

// function longestNoSpace(...args) {
//   args = args.filter((x) => !x.includes(" "));
//   args = args.map((x) => x.length);
//   return args.reduce((res, x) => (res > x ? res : x), 0);
// }
// console.log("Longest: " + longestNoSpace("Mark", "Absolute", "I am a boy"));
let x = {
  name: "Jason",
  age: 31,
  //   status: "Green Card",
};
let y = {
  status: "F1",
  duration: 2,
};
x.__proto__ = y;
// x.status = "B1";
console.log(x.status);
console.log(x.__proto__);
console.log(x.__proto__.__proto__);

function test(name, id) {
  this.name = name;
  this.id = id;
}
test.prototype.fun = function () {
  return "This is fun";
};
// console.log("The function: " + test);
// console.log("Parent of a function: " + test.prototype);
// console.log("Grandparent of a function: " + test.prototype.__proto__);
let s1 = new test("James", 23);
console.log(s1);
let testArr = ["Jason", "Omar", "Kiwan", "Omar2"];
console.log(testArr.reduce((acc, x) => acc + x));

function sum() {
  let sum = 0;
  for (let i of arguments) {
    sum += i;
  }
  return sum;
}
function sum2(...nums) {
  return nums.reduce((acc, x) => acc + x);
}
console.log(sum2(1, 2, 4, 5, 6));

let a = 5 + "9";
console.log(a);
