import { Calculator } from "./src/index.js";

// test suit for task 3
// Addition feature of calculator
describe("Add function class Calculator", () => {
  // test case 1
  test("add two given numbers when they are numbers", () => {
    const calculator = new Calculator();
    // Arrange, Act and Assert
    expect(calculator.add(1, 2)).toBe(3);
  });
  // test case 2
  test("parameters passed should be 2", () => {
    // Arrange
    const arg1 = 3;
    // Act
    const calculator = new Calculator();
    // Assert
    expect(() => calculator.add(arg1)).toThrowError("two arguments required");
  });

  // test case 3
  test("inputs passed should be numbers", () => {
    // Arrange
    const input1 = 3;
    const input2 = "the";
    // Act
    const calculator = new Calculator();
    // Assert
    expect(() => calculator.add(input1, input2)).toThrowError(
      "all inputs should be of type: number"
    );
  });
});

// Subtraction feature of calculator
describe("Subtract function class Calculator", () => {
  // test case 1
  test("subtract two given numbers when they are numbers", () => {
    const calculator = new Calculator();
    // Arrange, Act and Assert
    expect(calculator.subtract(3, 2)).toBe(1);
  });
  // test case 2
  test("parameters passed should be 2", () => {
    // Arrange
    const arg1 = 3;
    // Act
    const calculator = new Calculator();
    // Assert
    expect(() => calculator.subtract(arg1)).toThrowError("two arguments required");
  });

  // test case 3
  test("inputs passed should be numbers", () => {
    // Arrange
    const input1 = 3;
    const input2 = "the";
    // Act
    const calculator = new Calculator();
    // Assert
    expect(() => calculator.subtract(input1, input2)).toThrowError(
      "all inputs should be of type: number"
    );
  });
})

// Multiplication feature of calculator
describe("Multiply function class Calculator", () => {
  // test case 1
  test("Multiply two given numbers when they are numbers", () => {
    const calculator = new Calculator();
    // Arrange, Act and Assert
    expect(calculator.multiply(3, 2)).toBe(6);
  });
  // test case 2
  test("parameters passed should be 2", () => {
    // Arrange
    const arg1 = 3;
    // Act
    const calculator = new Calculator();
    // Assert
    expect(() => calculator.multiply(arg1)).toThrowError("two arguments required");
  });

  // test case 3
  test("inputs passed should be numbers", () => {
    // Arrange
    const input1 = 3;
    const input2 = "the";
    // Act
    const calculator = new Calculator();
    // Assert
    expect(() => calculator.multiply(input1, input2)).toThrowError(
      "all inputs should be of type: number"
    );
  });
})

// Division feature of calculator
describe("Divide function class Calculator", () => {
  // test case 1
  test("Divide two given numbers when they are numbers", () => {
    const calculator = new Calculator();
    // Arrange, Act and Assert
    expect(calculator.divide(4, 2)).toBe(2.0);
  });
  // test case 2
  test("parameters passed should be 2", () => {
    // Arrange
    const arg1 = 3;
    // Act
    const calculator = new Calculator();
    // Assert
    expect(() => calculator.divide(arg1)).toThrowError("two arguments required");
  });

  // test case 3
  test("inputs passed should be numbers", () => {
    // Arrange
    const input1 = 3;
    const input2 = "the";
    // Act
    const calculator = new Calculator();
    // Assert
    expect(() => calculator.divide(input1, input2)).toThrowError(
      "all inputs should be of type: number"
    );
  });

  // test case 4
  test("the denominator should not be 0", () => {
    // Arrange
    const input1 = 4;
    const input2 = 0;
    // Act 
    const calculator = new Calculator;
    // Assert
    expect(()=>calculator.divide(input1,input2)).toThrowError("Cannot divide a number by 0")
  })
})