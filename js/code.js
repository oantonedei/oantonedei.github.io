function sum(arr) {
  return arr.reduce((acc, item) => acc + item, 0);
}

function multiply(arr) {
  return arr.reduce((acc, item) => acc * item, 1);
}

function reverse(str) {
  return str.split("").reduce((acc, c) => c + acc);
}

function filterLongWords(words, i) {
  return words.filter((w) => w.length > i);
}
