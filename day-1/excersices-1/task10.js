//Use filter to filter out countries containing land
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland' ]

const land = countries.filter((country) =>
country.includes('land')
)
console.log(land)
