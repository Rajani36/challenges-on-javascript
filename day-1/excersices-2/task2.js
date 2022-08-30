// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).


const countries = [
    {
      name: 'Afghanistan',
      capital: 'Kabul',
      languages: ['Pashto', 'Uzbek', 'Turkmen'],
      population: 27657145,
      flag: 'https://restcountries.eu/data/afg.svg',
      currency: 'Afghan afghani'
    },
    {
      name: 'Åland Islands',
      capital: 'Mariehamn',
      languages: ['Swedish'],
      population: 28875,
      flag: 'https://restcountries.eu/data/ala.svg',
      currency: 'Euro'
    },
    {
      name: 'Albania',
      capital: 'Tirana',
      languages: ['Albanian'],
      population: 2886026,
      flag: 'https://restcountries.eu/data/alb.svg',
      currency: 'Albanian lek'
    },
    {
      name: 'Algeria',
      capital: 'Algiers',
      languages: ['Arabic'],
      population: 40400000,
      flag: 'https://restcountries.eu/data/dza.svg',
      currency: 'Algerian dinar'
    },
    {
      name: 'American Samoa',
      capital: 'Pago Pago',
      languages: ['English', 'Samoan'],
      population: 57100,
      flag: 'https://restcountries.eu/data/asm.svg',
      currency: 'United State Dollar'
    },
    {
      name: 'Andorra',
      capital: 'Andorra la Vella',
      languages: ['Catalan'],
      population: 78014,
      flag: 'https://restcountries.eu/data/and.svg',
      currency: 'Euro'
    }]


const categorizeCountries =(arr)=> {
    const getNames = countries.map((item)=> {
      return item.name
      })
      console.log(getNames)
      
      const iaNameCountry = getNames.filter((item)=> {
      return item.includes('ia')
      })
      
        console.log(iaNameCountry)
  
        const landNameCountry = getNames.filter((item)=> {
          return item.includes('land')
          })
          
            console.log(landNameCountry)
  
            const stanNameCountry = getNames.filter((item)=> {
              return item.includes('stan')
              })
              
                console.log(stanNameCountry)
  
                const islandNameCountry = getNames.filter((item)=> {
                  return item.includes('island')
                  })
                  
                    console.log(islandNameCountry)
        
        
        return [iaNameCountry,landNameCountry,stanNameCountry,islandNameCountry]
  
  
  
  }
  console.log(categorizeCountries(countries))
  




