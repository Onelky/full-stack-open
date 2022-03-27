import {useEffect, useState} from 'react'
import axios from "axios";
import Filter from "./components/Filter";
import Countries from "./components/FilteredCountries";

const App = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
        .then((response) => {
            setCountries(response.data);
        }).catch((error) => {
      console.log(error)
    });
  }, []);

    const searchCountries = (countryName) =>{
        setFilteredCountries(countries.filter((country) => country.name.common.toLowerCase().includes(countryName)))
    }

  return (
      <div>
        <h2>Find countries</h2>
        <Filter  searchCountries={searchCountries}/>
          {filteredCountries && (<Countries filteredCountries={filteredCountries}/>)}
      </div>
  )
}

export default App