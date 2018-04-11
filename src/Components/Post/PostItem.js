import React, { PureComponent } from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Author from '../Author';
import Date from '../Date';

class PostItem extends PureComponent {
    render() {
        const {
            id,
            image,
            children,
            author,
            content,
            date,
            numberComments,
            tags,
            title,
            isTitleLink
        } = this.props;
        return (
            <article className="post post-large">
                <div className="post-image single">
                    <img className="img-thumbnail" src={image} alt="" />
                </div>
                <Date date={date} />
                <div className="post-content">
                    <h2>
                        {isTitleLink
                            ? <Link to={`/Post/${id}`} >{title} </Link>
                            : title
                        }

                    </h2>
                    <p>{content}</p>

                    <div className="post-meta">
                        <Author author={author} />
                        <span>
                            <FontAwesome name="tags" className="fas fa-tags" />
                            {tags && tags.map((element, index) =>
                                <a key={index} href="/"> {element} </a>)
                            }
                        </span>
                        <span>
                            <FontAwesome name="comments" className="fas fa-comments" />
                            <a href="/"> {numberComments} Comments</a>
                        </span>
                        {children}
                    </div>
                </div>
            </article>
        );
    }
}

PostItem.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.shape({
        name: PropTypes.string,
        about: PropTypes.string
    }),
    numberComments: PropTypes.number.isRequired,
    tags: PropTypes.array.isRequired,
    date: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
    isTitleLink: PropTypes.bool
};

PostItem.defaultProps = {
    author: {},
    isTitleLink: false
};

export default PostItem;
