const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const generateMessages = (nameArray) => {
  nameArray.map(name => {
    console.log(`Hi ${name}! 50% off our best candies for you today!`);
  });
};

generateMessages(names);