import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import data from '../../assets/data/post.json';
import Header from '../Header';
import PostItem from './PostItem';

class DetailPost extends PureComponent {
    render() {
        const {
            PostId
        } = this.props;
        const dataPost = data.find(x => x.id === PostId);
        return (
            <div className="App">
                <Header />
                <PostItem {...dataPost}>
                    <div>{dataPost.detail}</div>
                </PostItem>
            </div>
        );
    }
}

DetailPost.propTypes = {
    PostId: PropTypes.number.isRequired
};

export default DetailPost;
