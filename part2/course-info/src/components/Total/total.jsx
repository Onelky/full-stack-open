import React from 'react';
import PropTypes from 'prop-types';

const Total = props => {
    const {parts} = props;

    const getTotal = () => {
        return parts.reduce((past, current) =>(
            past + current.exercises
        ), 0)
    }

    return (
        <div>
            <b>Total of {getTotal()} exercises</b>
        </div>
    );
};

Total.propTypes = {
    parts: PropTypes.array.isRequired

};

export default Total;
