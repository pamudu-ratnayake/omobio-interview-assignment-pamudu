import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';

import Home from "./Home";


class FrontEnd extends Component {

    state = {}

    render() {

        return (

            <div className="FrontEnd">

                <Router>

                    <Switch>

                        <Route path="/" exact component={Home}/>
                        <Route path="/login" component={Home}/>

                    </Switch>

                </Router>

            </div>

        );
    }
}

export default FrontEnd;
