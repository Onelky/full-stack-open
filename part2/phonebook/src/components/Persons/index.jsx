import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Persons = props => {
    const {persons, filter, handleDelete} = props;
    const getFilteredNumbers = () =>{
        return persons.filter((person) => person.name.toLowerCase().startsWith(filter));
    }

    return (
        <div>
            {
                getFilteredNumbers().map((person) => (
                    <div key={person.name}>
                        <span>{person.name} {person.number} </span>
                        <button onClick={() => handleDelete(person)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
};

Persons.propTypes = {
    persons: PropTypes.array.isRequired,
    filter: PropTypes.string.isRequired,
    handleDelete: PropTypes.func
};

export default Persons;
