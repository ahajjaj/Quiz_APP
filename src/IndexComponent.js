import React from "react";
import './App.css';

import { BrowserRouter, Switch, Route } from "react-router-dom" 
import LoginComponent from "./LoginComponent"
import RegisterComponent from "./RegisterComponent"
import QuizComponent from "./QuizComponent"


export class IndexComponent extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={LoginComponent} />
                    <Route exact path="/register" component={RegisterComponent} />
                    <Route exact path="/quiz/:username" component={QuizComponent} />
                    <Route exact path="/logout" component={LoginComponent} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default IndexComponent
