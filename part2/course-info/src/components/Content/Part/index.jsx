import React from 'react';
import PropTypes from 'prop-types';

const Part = props => {
    const {name, quantity} = props;

    return (
        <div>
            <p>{name} {quantity}</p>
        </div>
    );
};

Part.propTypes = {
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
};

export default Part;
