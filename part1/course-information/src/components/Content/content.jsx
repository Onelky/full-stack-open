import React from 'react';
import PropTypes from 'prop-types';
import Part from "./Part";

const Content = props => {
    const {parts} = props;
    return (
        <div>
            {
                parts && (
                    parts.map(course => (
                        <Part name={course.name} quantity={course.exercises}/>
                    ))
                )
            }

        </div>
    );
};

Content.propTypes = {
    parts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        exercises: PropTypes.number.isRequired
    }))
};

export default Content;
