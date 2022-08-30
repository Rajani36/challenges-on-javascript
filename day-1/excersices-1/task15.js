// Use filter to filter out countries containing six letters and more in the country array
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']


const filterOutCountries = countries.filter((country) =>
country.length >= 6
)
console.log(filterOutCountries)