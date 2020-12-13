import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom" 
import './App.css';
import LoginComponent from "./LoginComponent"
import QuizComponent from "./QuizComponent"

export class IndexComponent extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LoginComponent} />
                    <Route exact path="/quiz/:username" component={QuizComponent} />
                    <Route exact path="/logout" component={LoginComponent} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default IndexComponent
