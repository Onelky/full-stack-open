import React from 'react';
import PropTypes from 'prop-types';

const Countries = props => {
    const {filteredCountries} = props;
    console.log(filteredCountries);

    return (
        <div>
            {
                filteredCountries.length > 10  && <p>Too many matches, please specify another filter</p>
            }
            {
                filteredCountries.length < 10
                    && filteredCountries.map(country => (
                        <p key={country.fifa}>{country.name.common}</p>
                ))
            }

            {
                filteredCountries.length === 1
                && filteredCountries.map(country => (
                    <div key={country.fifa}>
                        <h2 >{country.name.common}</h2>
                        <p>Capital: {country.capital[0]}</p>
                        <p>Area: {country.area}</p>
                        <h3>Languages:</h3>
                        {
                            Object.keys(country.languages).map((key, index) => (
                                <p>{country.languages[key]}</p>
                            ))
                        }
                        <img src={country.flags['png']}/>


                    </div>
                ))
            }


        </div>
    );
};

Countries.propTypes = {
    filteredCountries: PropTypes.array
};

export default Countries;
