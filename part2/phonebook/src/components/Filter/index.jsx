import React from 'react';
import PropTypes from 'prop-types';

const Filter = props => {
    const {filter, setFilter} = props;
    return (
        <div>
            filter shown with:
            <input value={filter}
                   onChange={({target}) => setFilter( target.value)} />
        </div>
    );
};

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired
};

export default Filter;
