const {
  getPopulationByYear,
  getPopulationOfCountry,
  getPopulationByCountryAndYear,
  getWorldPopulationByYear,
  getWorldPopulationData,
  getPopulationByCountryCode
} = require('../index')

test('Get population by year', async () => {
  const population = getPopulationByYear(1960)

  expect(population).not.toBe(null)
  expect(Number(population['algeria'])).toEqual(11057864)
})

test('Get population by country from mexico', async () => {
  const population = getPopulationOfCountry('mexico')

  expect(population).not.toBe(null)
  expect(Number(population['2000'])).toEqual(98899845)
})

test('Get population by country and year', async () => {
  const population = getPopulationByCountryAndYear('mali', 1980)

  expect(population).not.toBe(null)
  expect(Number(population)).toEqual(7090124)
})

test('Get world population by year', async () => {
  const population = getWorldPopulationByYear(2020)

  expect(population).not.toBe(null)
  expect(Number(population)).toEqual(7752840547)

})

test('Get world population data', async () => {
  const population = getWorldPopulationData()

  expect(population).not.toBe(null)
  expect(Number(population['1971'])).toEqual(3760516757)
})

test('Get Population by Country Code', async () => {
  const population = getPopulationByCountryCode('IND')

  expect(population).not.toBe(null)
  expect(Number(population['2020'])).toEqual(1380004385)
})

test('Get population by country code (with year)', async () => {
  const population = getPopulationByCountryCode('AND', 1980)

  console.log(population)

  expect(population).not.toBe(null)
  expect(Number(population)).toEqual(36063)
})
