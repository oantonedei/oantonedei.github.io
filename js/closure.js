/* Question 1*/
/* a revealing module that returns an object with two methods. add() method and a reset() method */
const count = (() => {
  let counter = 0;
  return {
    add() {
      counter += 1;
    },
    reset() {
      counter = 0;
    },
    getCounter() {
      return counter;
    },
  };
})();

/* 
    Question 2
    the free variable is "counter". 
    A free variable is a variable that are neither passed as parameter
    nor locally declared
 */

/* Question 3*/
const make_adder = (inc) => {
  let counter = 0;
  return function add() {
    return (counter += inc);
  };
};

const add5 = make_adder(5);
const add7 = make_adder(7);

/* Question 4 
    Using Module pattern we can remove all the names from global namespace.

*/

/* Question 5*/
const employee = (() => {
  let name = "",
    age = 0,
    salary = 0;
  return {
    getName() {
      return name;
    },
    getAge() {
      return age;
    },
    getSalary() {
      return salary;
    },
    setName(n) {
      name = n;
    },
    setAge(a) {
      age = a;
    },
    setSalary(s) {
      salary = s;
    },
    increaseSalary(percentage) {
      salary += (this.getSalary() / 100) * percentage;
    },
    incrementAge() {
      age = this.getAge() + 1;
    },
  };
})();

/* Question 6 */
Object.defineProperty(employee, address);
Object.defineProperty(employee, setAdress, (addr) => {
  address = addr;
});
Object.defineProperty(employee, getAdress, () => {
  return address;
});
