import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
    const {name} = props;
    return (
        <h1>{name}</h1>
    );
};

Header.propTypes = {
    name: PropTypes.string.isRequired
};

export default Header;
