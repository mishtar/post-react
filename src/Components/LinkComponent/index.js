import React from 'react';
import PropTypes from 'prop-types';

// Example of high order function
const Link = props => (
    <a href={props.url} target="_blank" title={props.title}>
        {props.children}
    </a>
);

Link.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
};

export default Link;
