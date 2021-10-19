#   WORLD COUNTRIES REGIONS HISTORIC POPULATION

[![version](https://img.shields.io/npm/v/world-countries-historic-population)](https://www.npmjs.com/package/world-countries-historic-population)


Population data of countries, regions, total world, continents, unions from year 1960 to 2020

## Installing

``` bash
npm i world-countries-historic-population
```


## Example usage

``` javascript
const data = require('world-countries-historic-population')

// to get population of each country in a particular year
data.getPopulationByYear(year)

// to get population in each year of a particular country
data.getPopulationOfCountry(countryName)

// to get population by year and country
data.getPopulationByCountryAndYear(countryName, year)

// to get population of world by particular year
data.getWorldPopulationByYear(year)

// population of world from begging (1960) to year (2020)
data.getWorldPopulationData()

Feel free to contribute and make ir better

## Possible future additions

### Search by Country Code
### Make continent and region data more easily accessible
### Make search not case sensative


and then include in your `webpack.config.js`

## How to contribute

These are the steps required:

``` bash
# Clone the repo (or better your fork of it)
git clone https://github.com/iamsahil1910/world-countries-historic-population.git
cd world-countries-historic-population

# Create new branch
git checkout -b new-branch

Make Changes

# If all is ok commit and push
git add .
git commit
git push

# Then send a pull request with your changes.
```
