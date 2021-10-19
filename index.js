const dataByCountry = require('./country-wise-data.json');
const dataByYear = require('./year-wise-country-population.json');

// to get population of each country in a particular year
const getPopulationByYear = function (year) {
    return dataByYear[String(year)] || null
};

// to get population in each year of a particular country
const getPopulationOfCountry = function (countryName) {
    return dataByCountry[String(countryName)] || null
}

// to get population by year and country
const getPopulationByCountryAndYear = function (countryName, year) {
    return dataByCountry[String(countryName)][String(year)] || null
}

// to get population of world by particular year
const getWorldPopulationByYear = function (year) {
    return dataByYear[String(year)]["World"] || null
}

// population of world from begging (1960) to year (2020)
const getWorldPopulationData = function () {
    return dataByCountry["World"] || null
}

  
  module.exports = {
    getPopulationByYear,
    getPopulationOfCountry,
    getPopulationByCountryAndYear,
    getWorldPopulationByYear,
    getWorldPopulationData
  };
