import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
    const {setValue, value, text} = props;
    return (
        <button onClick={() => setValue(value+1)}>{text}</button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    value: PropTypes.number,
    setValue: PropTypes.func

};

export default Button;
