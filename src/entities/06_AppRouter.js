// Main part on the page
// It switches between publicRoutes (/, contacts, transfers, routes)

import AppRouter from "../components/AppRouter/AppRouter";
import {publicRoutes} from "../routes/publicRoutes";

import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {MAIN_ROUTE} from "../utils/constants";

class AppRouter extends Component {
    render()
    {
        return (
                <Switch>
                    {publicRoutes.map(({ path, Component }) => (
                        <Route key={path} path={path} component={Component} exact />
                    ))}
                    <Redirect to={MAIN_ROUTE} />
                </Switch>
        );
    }
}

export default AppRouter;
