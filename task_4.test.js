import { capitalize } from "./src/index.js";

// capitalize function
describe("Capitalize function", () => {
  // test case 1
  test("Returns the first character of a string capitalized", () => {
    // Arrange
    const input = "wealthy"
    // Act
    const result = capitalize(input)
    // Assert
    expect(result).toBe("Wealthy")
  })
})