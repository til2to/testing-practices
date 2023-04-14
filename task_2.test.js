import { reverseString } from "./src/index.js";

// test suit for task 2
describe("reverseString function", () => {
  // test case 1
  test("throw an error if the string is empty", () => {
    // Arrange
    const input = "";
    // Act and Assert
    expect(() => {
      reverseString(input);
    }).toThrowError("string must be at least 1 character");
  });

  // test case 2
  test("reverse a given string", () => {
    // Arrange
    const input = "nevaeh";
    // Act
    const result = reverseString(input);

    // Assert
    const expectedValue = "heaven";
    expect(result).toBe(expectedValue);
  });
});