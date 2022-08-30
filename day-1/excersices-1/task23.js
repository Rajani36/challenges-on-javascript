// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

const countries = ['India', 'USA', 'Africa', 'Dubai','Russia']
const findCountryName = countries.findIndex((item)=> item === 'Russia')
console.log(findCountryName)