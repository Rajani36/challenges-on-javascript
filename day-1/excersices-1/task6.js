//Use map to create a new array by changing each country to uppercase in the countries array.

const countries = ['India', 'USA', 'Africa', 'Dubai', 'Nepal']
const countriesToUpperCase = countries.map((country) => country.toUpperCase())
console.log(countriesToUpperCase)