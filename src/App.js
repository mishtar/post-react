import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import './assets/Themes/theme.scss';
import './assets/Themes/theme-blog.scss';
import './assets/Themes/theme-elements.scss';
import './assets/Themes/theme-animate.scss';
import './assets/Themes/custom.scss';
import './assets/Themes/skins/default.scss';

import Home from './Components/Home';
import DetailPost from './Components/Post/Detail';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path="/" render={() => <Home />} />
                    <Route exact path="/prueba">
                        <div>Hola</div>
                    </Route>
                    <Route
                        exact
                        path="/Post/:PostId"
                        render={({ match }) => <DetailPost PostId={parseInt(match.params.PostId, 10)} />}
                    />
                    <Route path="*">
                        <div>oops</div>
                    </Route>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
