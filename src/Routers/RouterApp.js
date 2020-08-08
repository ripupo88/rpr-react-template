import React from "react";
import {
    Switch,
    Route,
    Redirect,
    BrowserRouter as Router,
} from "react-router-dom";
import { HomePage } from "../Pages/HomePage";

export const RouterApp = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Redirect to="/" />
            </Switch>
        </Router>
    );
};
