import React from 'react';
import PropTypes from 'prop-types';

const StatisticLine = props => {
    const {label, value, isPercentage} = props;
    return (
        <tr>
            <td>{label}</td>
            <td>{value} {isPercentage ? '%' : ''}</td>
        </tr>
    );
};

StatisticLine.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    isPercentage: PropTypes.bool
};

StatisticLine.defaultProps = {
    isPercentage: false
};

export default StatisticLine;
