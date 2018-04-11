import React from 'react';
import Post from '../Post';
import data from '../../assets/data/post.json';
import PaginationControl from '../PaginationControl';


const PostList = () => (
    <div className="col-md-9">
        {data && data.map(
            (element, index) =>
                <Post key={index} {...element} />
        )}
        <PaginationControl TotalRecordCount={50} PageSize={5} />
    </div>
);

export default PostList;
