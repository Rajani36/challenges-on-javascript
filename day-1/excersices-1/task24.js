// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

const countries = ['India', 'USA', 'Africa', 'Dubai', 'Nepal']
const countryByname = countries.findIndex((item)=> item === 'Norway')
console.log(countryByname)