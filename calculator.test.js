const Calculator = require("./Calculator");

describe("add", () => {
  const calculator = new Calculator();

  test("adds positive numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test("adds negative numbers", () => {
    expect(calculator.add(-2, -3)).toBe(-5);
  });

  test("adds decimal numbers", () => {
    expect(calculator.add(1.5, 2.5)).toBe(4);
  });
});

describe("subtract", () => {
  const calculator = new Calculator();

  test("subtracts positive numbers", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test("subtracts negative numbers", () => {
    expect(calculator.subtract(-5, -3)).toBe(-2);
  });

  test("subtracts decimal numbers", () => {
    expect(calculator.subtract(5.5, 2.5)).toBe(3);
  });
});

describe("multiply", () => {
  const calculator = new Calculator();

  test("multiplies positive numbers", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test("multiplies negative numbers", () => {
    expect(calculator.multiply(-2, -3)).toBe(6);
  });

  test("multiplies decimal numbers", () => {
    expect(calculator.multiply(1.5, 2.5)).toBe(3.75);
  });
});

describe("divide", () => {
  const calculator = new Calculator();

  test("divides positive numbers", () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });

  test("divides negative numbers", () => {
    expect(calculator.divide(-6, -3)).toBe(2);
  });

  test("throws an error when dividing by zero", () => {
    expect(() => calculator.divide(6, 0)).toThrow("Division by zero.");
  });
});
