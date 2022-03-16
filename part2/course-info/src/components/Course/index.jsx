import React from 'react';
import PropTypes from 'prop-types';
import Header from "../Header";
import Content from "../Content/content";
import Total from "../Total/total";

const Course = props => {
    const {course} = props;

    return (
        <div>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
};

Course.propTypes = {
    course: PropTypes.object.isRequired
};

export default Course;
