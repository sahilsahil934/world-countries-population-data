const dataByCountry = require('./country-wise-data.json');
const dataByYear = require('./year-wise-country-population.json');

// to get population of each country in a particular year
const getPopulationByYear = function (year) {
    return dataByYear[String(year)] || null
};

// to get population in each year of a particular country
const getPopulationOfCountry = function (countryName) {
    return dataByCountry[String(countryName).toLowerCase()] || null
}

// to get population by year and country
const getPopulationByCountryAndYear = function (countryName, year) {
    return dataByCountry[String(countryName).toLowerCase()][String(year)] || null
}

// to get population by country code and optional year
const getPopulationByCountryCodeAndOptionalYear = function (countryCode, year = null) {
    let countryName;
    for (const [key, value] of Object.entries(dataByCountry)) {
        countryName = value['Country Code'] === countryCode.toUpperCase() ? key : null;
    }
    // optional specific year population
    if (year) {
        return dataByCountry[String(countryName).toLowerCase()][String(year)] || null;
    }
    // get population of every year
    return dataByCountry[String(countryName).toLowerCase()] || null;
}

// to get population of world by particular year
const getWorldPopulationByYear = function (year) {
    return dataByYear[String(year)]["world"] || null
}

// population of world from begging (1960) to year (2020)
const getWorldPopulationData = function () {
    return dataByCountry["world"] || null
}

  
  module.exports = {
    getPopulationByYear,
    getPopulationOfCountry,
    getPopulationByCountryAndYear,
    getWorldPopulationByYear,
    getWorldPopulationData
  };
