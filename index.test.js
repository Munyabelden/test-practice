const stringLength = require("./index.js");

describe("stringLength", () => {
  it("throws an error if the input string is empty", () => {
    expect(() => {
      stringLength("");
    }).toThrow("String must be at least 1 character long.");
  });

  it("throws an error if the input string is longer than 10 characters", () => {
    expect(() => {
      stringLength("12345678901");
    }).toThrow("String must not be longer than 10 characters.");
  });

  it("returns the length of the input string", () => {
    expect(stringLength("hello")).toBe(5);
    expect(stringLength("12345")).toBe(5);
  });
});
