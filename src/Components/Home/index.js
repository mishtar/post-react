import React, { Component } from 'react';

import PostList from '../PostList';
import Categories from '../Categories';
import Header from '../Header';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    render() {
        return (
            <div className="App">
                <Header />
                <div className="container">
                    <div className="row">
                        <PostList />
                        <div className="col-md-3">
                            <aside className="sidebar">
                                <h4 className="heading-primary">Categories</h4>
                                <Categories />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
