// Use filter to filter out country start with 'E';
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand','England']
const filterByE = countries.filter((country) =>
country.startsWith('E')
)
console.log(filterByE)