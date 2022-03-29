
const checkLength = (phoneNumber) => {
  return phoneNumber.length <= 10
}

const filterLongNumbers = (array) => {
  let newArray = array.filter(number => checkLength(number));
  return newArray
}

module.exports = filterLongNumbers;

console.log(filterLongNumbers(['23472893023442234', '234']))