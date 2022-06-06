import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebInterface from './pages/webInterface';
import CreatePage from './pages/createPage';
import UpdatePage from './pages/updatePage';
import DeletePage from './pages/deletePage';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact={true}>
                    <WebInterface />
                </Route>
                <Route path="/create" exact={true}>
                    <CreatePage />
                </Route>
                <Route path="/update" exact={true}>
                    <UpdatePage />
                </Route>
                <Route path="/delete" exact={true}>
                    <DeletePage />
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;