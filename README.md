This repo covers the beginning of my JavaScript journey. We will begin by going through the JavaScript basics from Makers Academy. 

### Steps taken to set up my project folder
- begin by installing node, this will be used as our REPL throughout this project where I can test code and ensure my program is running correctly.
- The install jest, this is our testing software just like RSpec for Ruby. This will allow me to Test Drive any project.

#### First project
We need to testdrive a simple function called **add** which will take two numbers as arguments and add them together.

The Learning Objectives for this are:
  - [x] To Test-Drive a simple function using jest
  - [x] To be able to export a function using module.exports
  - [x] To be able to require that 'exported' function in another file
  - [x] To run a test suite using jest

#### Second Project - FizzBuzz
We created a fizzbuzz function earlier, we now need to use jest to create tests to ensure it's working correctly.

The Learning Objectives for this are:
  - [x] complete all the Learning objectives from the previous project but for the FizzBuzz function.

  Criteria to test for:
  - it should return "Fizz" if the number is divisible by 3 (e.g 3 or 9)
  - it should return "Buzz" if the number is divisible by 5 (e.g 5 or 10)
  - it should return "FizzBuzz" if the number is divisible by 15 (e.g 15 or 30)
  - it should just return the number the number is otherwise

#### Arrays
The following exercises will help us understand how to use arrays in JavaScript

##### Candies Exercise
For this exercise we need to create an addToBatch function that will add candy orders to an array and batch the orders so that any array can only have a maximum of 5 orders.

We will learn how to:
  - Declare an array in JS.
  - Add elements to an array.
  - Get the length of an array.

- [x] Use the .concat method to add elements to the array
- [x] Use an if statement and the .length method to stop any orders being added once 5 orders have been reached. 

##### Phone Number length
Now we want to be able to text to our customers, however, some of the phone numbers may be incorrect. 

First, we need to create a function called checkNumber, it should return true if the number length is less than 10 and false if it's greater than 10.

Now you should have a function that can check one phone number at a time. Let's speed this up, lets create another function called filterLongNumbers, it's responsibility is to take an array of phone numbers and remove any that have a length greater than 10.
  - Remember to make use of your checkNumber function with filterLongNumbers

- [x] Once the above have been completed tick this box

##### Personalized text messages
For this exercise we need to create a function called generateMessages which takes an array of names as an argument and creates a message using the customers name for each one. It should look like this:
  - ``Hi Anna! 50% off our best candies for you today!``
  - Where Anna is a name from the array

- [x] Once the above have been completed tick this box

#### Arrays and Objects
- We have recently learned that objects are represented in a similar way to Ruby hashes. see an example below
```
const person = {
  name: 'Maxine',
  age: 32,
  address: 'London, E1 123'
};

// both ways can be used to access an object's property:
console.log(person.name);
console.log(person['name']);
```
- As you can see we can either call upon the name similar to the way we call for a hash value or we can do something like ``person.name``. 
- This is we can access attributes of this person class.

##### Personalised messages 2.0
For this exercise we need to refer back to how we used arrays to print out personalised messages for each customer, however, the messages had a fixed discount given to each customer.

Now we need to customise this discount, we can do this using what we learned about accessing object values. We will use the new array below:

```
const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla',discount:  6 }
];
```
- As you can see each customer has an object which stores its name and discount values. Let use what we learned in array about the map method and apply it here. The goes is to create an upgraded message which features the customers name and discount.

- Each message should like this:
``Hi Anna! 50% off our best candies for you today!``

- [x] Once the above have been completed tick this box



