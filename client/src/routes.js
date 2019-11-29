import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Body } from './components/style.js'

import Navbar           from './pages/Navbar';
import Home             from './pages/Home';
import NewsRoutes       from './pages/News/routes';
import Championships    from './pages/Championships';
import UserRoutes       from './pages/User/routes'

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Body>
                <Switch>
                    <Route path="/"                 exact={true} component={Home} />
                    <Route path="/championships"    exact={true} component={Championships} />
                    <NewsRoutes />
                    <UserRoutes />
                </Switch>
            </Body>
        </BrowserRouter>
    )
}

export default Routes;
