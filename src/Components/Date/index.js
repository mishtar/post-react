import React from 'react';
import PropTypes from 'prop-types';

const Date = props => (
    <div className="post-date">
        <span className="day">{props.date && props.date.day}</span>
        <span className="month">{props.date && props.date.month}</span>
    </div>
);

Date.propTypes = {
    date: PropTypes.object.isRequired
};

export default Date;
