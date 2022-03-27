import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
    const {course} = props;
    return (
        <h1>{course}</h1>
    );
};

Header.propTypes = {
    course: PropTypes.string.isRequired
};

export default Header;
