import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Persons = props => {
    const {persons, filter} = props;
    const getFilteredNumbers = () =>{
        return persons.filter((person) => person.name.toLowerCase().startsWith(filter));
    }

    return (
        <div>
            {
                getFilteredNumbers().map((person) => (
                    <p key={person.name}>{person.name} {person.number}</p>
                ))
            }
        </div>
    );
};

Persons.propTypes = {
    persons: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired
};

export default Persons;
