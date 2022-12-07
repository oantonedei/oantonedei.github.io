describe("The test for sum()", function () {
  it("Sum of [1,2,3] is 6", function () {
    assert.equal(sum([1, 2, 3]), 6);
  });
});

describe("The test for multiply()", function () {
  it("Multiple of [1,2,3] is 6", function () {
    assert.equal(multiply([1, 2, 3]), 6);
  });
});

describe("The test for reverse()", () => {
  it("Reverse of 'reverse' is 'esrever'", () => {
    assert.equal(reverse("reverse"), "esrever");
  });
});

describe("The test for filterlongwords()", () => {
  it("The words longer than length 3 in array ['average', 'arrogant', 'sad', 'mad'] is ['average', 'arrogant']", () => {
    assert.equal(
      JSON.stringify(filterLongWords(["average", "arrogant", "sad", "mad"], 3)),
      JSON.stringify(["average", "arrogant"])
    );
  });
});
