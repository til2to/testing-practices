import { stringLength, reverseString } from "./src/index.js";

// test suit for task 1
describe("stringLength function", () => {
  // test case 1
  test("returns the correct length of the given string if it between 1 and 11", () => {
    // Arrange
    const input = "now"
    // Act
    const result = stringLength(input)
    // Assert
    expect(result).toBe(input.length) 
  })

  // // test case 2
  test("throws an error if input is not a string", () => {
    // Arrange
    const input = 42;
    
    // Act and Assert
    expect(() => {
      stringLength(input);
    }).toThrowError('input is not a string');
  });

  // test case 3
  test("throw error if input length is less than 1", () => {
    // Arrange
    const input = "";
    // Act and Assert
    expect(() => {
      stringLength(input)
    }).toThrowError("String must be at least 1 character long")
  })

  // test case 4
  test("throw error if input length is greater 10", () => {
    // Arrange
    const input = "hello world";
    
    // Act and Assert
    expect(() => {
      stringLength(input)
    }).toThrowError('String must not be longer than 10 characters')
  })
});

// test suit for task 2
describe("reverseString function", () => {
  // test case 1
  test("throw an error if the string is empty", () => {
    // Arrange
    const input = '';
    // Act and Assert
    expect(() => {
      reverseString(input);
    }).toThrowError("string must be at least 1 character")
  })

  // test case 2
  test("reverse a given string", () => {
    // Arrange
    const input = "nevaeh"
    // Act
    const result = reverseString(input);
    
    // Assert
    const expectedValue = "heaven"
    expect(result).toBe(expectedValue);
  })
});

