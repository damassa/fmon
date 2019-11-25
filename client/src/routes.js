import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Body } from './components/style.js'

import Navbar           from './pages/Navbar';
import Home             from './pages/Home';
import News             from './pages/News';
import Championships    from './pages/Championships';

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Body>
                <Switch>
                    <Route path="/"                 exact={true} component={Home} />
                    <Route path="/news"             exact={true} component={News} />
                    <Route path="/championships"    exact={true} component={Championships} />
                </Switch>
            </Body>
        </BrowserRouter>
    )
}

export default Routes;
