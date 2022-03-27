import React from 'react';
import PropTypes from 'prop-types';

const getStyles = (type) => (
    {
        color: type === 'error' ? 'red' : 'green',
        background: 'lightgrey',
        fontSize: '20px',
        borderStyle: 'solid',
        borderRadius: '5px',
        padding: '10px',
        marginBottom: '10px'
    }
)
const Notification = ({ message, type }) => {
    if (message === null) {
        return null
    }

    return (
        <div style={getStyles(type)}>
            {message}
        </div>
    )
}

Notification.propTypes = {
    message: PropTypes.string,
    type: PropTypes.string
};

export default Notification;
