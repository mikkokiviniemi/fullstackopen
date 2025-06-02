import { useState, useEffect } from 'react'
import axios from 'axios'
import './index.css'

const apiUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getCountries = async () => {
  const response = await axios.get(apiUrl)
  return response.data
}

const CountryDetails = ({ country }) => (
  <div>
    <h2>{country.name.common}</h2>
    <p>Capital: {country.capital ? country.capital.join(', ') : 'N/A'}</p>
    <p>Population: {country.population}</p>
    <p>Area: {country.area} km²</p>
    <p>Region: {country.region}</p>
    <h3>Languages</h3>
    <ul>
      {country.languages
        ? Object.values(country.languages).map(language => (
            <li key={language}>{language}</li>
          ))
        : <li>N/A</li>}
    </ul>
    <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
  </div>
)

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')
  const [filteredCountries, setFilteredCountries] = useState([])
  const [showCountry, setShowCountry] = useState(null)

  useEffect(() => {
    getCountries().then(data => {
      setCountries(data)
      setFilteredCountries(data)
    })
  }, [])

  useEffect(() => {
    if (filter) {
      const filtered = countries.filter(country =>
        country.name.common.toLowerCase().includes(filter.toLowerCase())
      )
      setFilteredCountries(filtered)
      setShowCountry(null)
    } else {
      setFilteredCountries(countries)
      setShowCountry(null)
    }
  }, [filter, countries])

  return (
    <div>
      <div>
        find countries{' '}
        <input
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
      </div>
      {filteredCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : filteredCountries.length === 1 ? (
        <CountryDetails country={filteredCountries[0]} />
      ) : showCountry ? (
        <CountryDetails country={showCountry} />
      ) : (
        filteredCountries.map(country => (
          <div key={country.name.common}>
            {country.name.common}{' '}
            <button onClick={() => setShowCountry(country)}>show</button>
          </div>
        ))
      )}
    </div>
  )
}

export default App