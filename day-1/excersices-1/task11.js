// Use filter to filter out countries having six character

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

const countriesHaveSixLetters  = countries.filter((country) =>
country.length === 6
)
console.log(countriesHaveSixLetters)
