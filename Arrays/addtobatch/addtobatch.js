
const addToBatch = (array, num) => {
  if (array.length < 5) {
    return array.concat(num);    
  } else {
    return array
  }
} 

module.exports = addToBatch;