// Task 1
export const stringLength = (str) => {
  const strLength = str.length;
  if (typeof str !== 'string') {
    throw new Error('input is not a string');
  }
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
  if(str.length < 1){
    throw new Error("string must be at least 1 character")
  }
  return str.split("").reverse().join("")
}
