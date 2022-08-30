// Use findIndex to find the position of the first country containing only six letters in the countries array

const countries = ['India', 'USA', 'Africa', 'Dubai', 'Nepal']
const countryByIndex = countries.findIndex((item)=> item.length === 6 )
console.log(countryByIndex)
