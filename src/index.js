// Task 1
export const stringLength = (str) => {
  const strLength = str.length;
  // check the type of string
  if (typeof str !== 'string') {
    throw new Error('input is not a string');
  }
  // check the number of characters
  else if(strLength < 1) {
    throw new Error('String must be at least 1 character long');
  }
  else if(strLength > 10){
    throw new Error('String must not be longer than 10 characters')
  }
  return strLength;
}

// Task 2
export const reverseString = (str) => {
  // check for number of characters of the string
  if(str.length < 1){
    throw new Error("string must be at least 1 character")
  }
  return str.split("").reverse().join("")
}

// Task 3, calculator
export class Calculator{
  add = (...nums) => {
    // check the number of arguments passed
    if(nums.length !== 2){
      throw new Error("two arguments required")
    }
    // check the type of arguments passed
    else if(!nums.every((num) => typeof num === "number")){
      throw new Error("all inputs should be of type: number")
    }
    return nums.reduce((prev, curr) => prev + curr, 0)
  }

  subtract = (...nums) => {
    // check the number of arguments passed
    if(nums.length !== 2){
      throw new Error("two arguments required")
    }
    // check the type of arguments passed
    else if(!nums.every((num) => typeof num === "number")){
      throw new Error("all inputs should be of type: number")
    }
    return nums.reduce((prev, curr) => prev - curr)
  }

  multiply = (...nums) => {
    // check the number of arguments passed
    if(nums.length !== 2){
      throw new Error("two arguments required")
    }
    // check the type of arguments passed
    else if(!nums.every((num) => typeof num === "number")){
      throw new Error("all inputs should be of type: number")
    }
    return nums.reduce((prev, curr) => prev * curr, 1)
  }

  divide = (...nums) => {
    // check the number of arguments passed
    if(nums.length !== 2){
      throw new Error("two arguments required")
    }
    // chect that none of the arguments is 0
    else if(nums.some((num) => num === 0)){
      throw new Error("Cannot divide a number by 0")
    }
    // check the type of arguments passed
    else if(!nums.every((num) => typeof num === "number")){
      throw new Error("all inputs should be of type: number")
    }
    return nums.reduce((prev, curr) => prev/curr)
  }
}

// Task 4, capitalize function
export const capitalize = (str) => {
  // input should be a string
  if(typeof str !== "string"){
    throw new Error("input should be a string")
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
} 