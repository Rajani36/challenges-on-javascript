// Use find to find the first country containing only six letters in the countries array


const countries = ['India', 'USA', 'Africa', 'Dubai', 'Nepal']
const findcountry = countries.find((item)=> item.length === 6 )
console.log(findcountry)