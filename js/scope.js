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
