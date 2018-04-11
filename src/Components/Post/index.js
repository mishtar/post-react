import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import PostItem from './PostItem';

const Post = props => (
    <PostItem {...props} isTitleLink>
        <Link to={`/Post/${props.id}`} >
            <Button color="info" size="sm" className="pull-right">Read more...</Button>
        </Link>
    </PostItem>
);

Post.propTypes = {
    id: PropTypes.number.isRequired
};

export default Post;
