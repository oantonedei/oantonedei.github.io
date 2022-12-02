function myFunctionTest(expected, found) {
  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

//Question 1: function max(a,b)
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(
  "The Expected output for max(40,40.5) is 40.5: " +
    myFunctionTest(40.5, max(40, 40.5))
);

//Question 2: function maxOfThree(a,b,c)
function maxOfThree(a, b, c) {
  return max(max(a, b), c);
}

console.log(
  "The Expected output for maxOfThree(40,40.5,40.2) is 40.5: " +
    myFunctionTest(40.5, maxOfThree(40, 40.5, 40.2))
);

//Question 3: function isVowel(a)
function isVowel(a) {
  if (a.length > 1) return false;
  a = a.toLowerCase();
  return ["a", "e", "i", "o", "u"].includes(a);
}

console.log(
  "The Expected output for isVowel('A') is true: " +
    myFunctionTest(true, isVowel("A"))
);

//Question 4: function sum(arr[]) && multiply(arr[])
let arr = [1, 2, 3, 4];
function sum(arr) {
  return arr.reduce((total, x) => total + x, 0);
}

console.log(
  "The Expected output for sum([1,2,3,4]) is 10: " +
    myFunctionTest(10, sum([1, 2, 3, 4]))
);

function multiply(arr) {
  return arr.reduce((total, x) => total * x, 1);
}

console.log(
  "The Expected output for multiply([1,2,3,4]) is 24: " +
    myFunctionTest(24, multiply([1, 2, 3, 4]))
);

//Question 5: function reverse("jag testar")
function reverse(str) {
  return str.split("").reverse().join("");
}

console.log(
  "The Expected output for reverse('jag testar') is 'ratset gaj': " +
    myFunctionTest("ratset gaj", reverse("jag testar"))
);

//Question 6: findLongestWord(arr[])
let arr2 = ["blacksmith", "elephant", "kite", "supernova", "photography"];
function findLongestWord(arr2) {
  let numArr = arr2.map((x) => x.length);
  return numArr.reduce((longest, x) => (longest < x ? x : longest), 0);
}

console.log(
  "The Expected output for findLongestWord(['blacksmith', 'elephant', 'kite', 'supernova', 'photography']) is 11: " +
    myFunctionTest(
      11,
      findLongestWord([
        "blacksmith",
        "elephant",
        "kite",
        "supernova",
        "photography",
      ])
    )
);

//Question 7: filterLongestWord(arr[])
function filterLongestWord(arr2, i) {
  return JSON.stringify(arr2.filter((x) => x.length > i));
}

console.log(
  "The Expected output for filterLongestWord(['blacksmith', 'elephant', 'kite', 'supernova', 'photography'], 9) is ['blacksmith','photography']: " +
    myFunctionTest(
      JSON.stringify(["blacksmith", "photography"]),
      filterLongestWord(
        ["blacksmith", "elephant", "kite", "supernova", "photography"],
        9
      )
    )
);
