import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Filter = props => {
    const {searchCountries} = props;
    const [filter, setFilter] = useState('');

    const handleFilterChange = (value) => {
      setFilter(value);
      searchCountries(value);
    }

    return (
        <div>
            find countries
            <input value={filter}
                   onChange={({target}) => handleFilterChange( target.value)} />
        </div>
    );
};

Filter.propTypes = {
    searchCountries: PropTypes.func.isRequired,
};

export default Filter;
