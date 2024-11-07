//question 1 : Given an array of numbers, use the map function with an arrow function to square each element of the array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.map((number) => {
    console.log(number * number);
})


//question 2 : Write a JavaScript function that takes a student's score as a parameter and returns their grade (A, B, C, D, or F) using a series of ternary operators..

function grade(score){
    return score >= 90 ? "A" :
    score >= 80 ? "B" :
    score >= 70 ? "C" :
    score >= 60 ? "D" : "F" ;
    
}

console.log(grade(85));
console.log(grade(61));
console.log(grade(78));
console.log(grade(96));


//question 3 :  Create an object representing a car with properties like Company name, model, and year. Write a function to change the car's year property. Also use object destructuring to extract and print the car's Model and Year.
const car = {
    company: "Toyota",
    model: "Camry",
    year: 2020
}

function changeYear(car, year){
    car.year = year;
}

const {model, year} = car;
console.log(`Model : ${model}, Year : ${year}`);

changeYear(car, 2023);
console.log(`Updated Year : ${car.year}`);


//question 4 : Given an array of numbers, use the filter function to create a new array containing only the prime numbers.

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  
  const nums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 17];
  const primeNumbers = nums.filter(isPrime);
  
  console.log(primeNumbers); // Output: [2, 3, 5, 7, 11, 13, 17]
  


//question 5 : State different use cases of map, filter and reduce functions

const pricesUSD = [5, 10, 15];
const exchangeRate = 0.9;
const pricesEUR = pricesUSD.map(price => price * exchangeRate);
console.log(pricesEUR); 

const digits = [1, 2, 3, 4, 5, 6];
const evenNumbers = digits.filter(num => num % 2 === 0);
console.log(evenNumbers);

const values = [10, 20, 30, 40];
const totalSum = values.reduce((sum, value) => sum + value, 0);
console.log(totalSum);


//question 6 : Write an asynchronous function using async-await  to fetch data from an API (you can use the JSONPlaceholder API) and log the result
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
fetchData();


//question 7 : Define a nested object representing a person with properties like name, address, and contact. Use optional chaining to safely access the person's phone number, even if the contact property is missing.
const person = {
    name: 'John Doe',
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
    },
    contact: {
        phone: '123-456-7890',
        email: 'john.doe@example.com',
    },
};

const phoneNum = person.contact?.phone; 
console.log(phoneNum); 