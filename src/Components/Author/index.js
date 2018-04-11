import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

const Author = ({ author }) => (
    <span>
        <FontAwesome name="usuario" className="fa fa-user" /> By
        <a href="/"> {author && author.name}</a>
    </span>
);

Author.propTypes = {
    author: PropTypes.object.isRequired
};

export default Author;
