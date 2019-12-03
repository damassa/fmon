import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Body } from './components/style.js'

import Navbar           from './pages/Navbar';
import Home             from './pages/Home';
import Championships    from './pages/Championships';
import Login            from './pages/User/login';
import Logout           from './pages/User/logout';
import Register         from './pages/User/register';
import PassRecover      from './pages/User/passRecover';
import News             from './pages/News/index';
import NewsPage         from './pages/News/newsPage';
import CreateNews       from './pages/News/createNews';

const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Body>
                <Switch>
                    <Route path="/"                 exact={true} component={Home} />
                    <Route path="/championships"    exact={true} component={Championships} />

                    <Route path="/user/signin"      exact={true} component={Login} />
                    <Route path="/user/logout"      exact={true} component={Logout} />
                    <Route path="/user/register"    exact={true} component={Register} />
                    <Route path="/user/passRecover" exact={true} component={PassRecover} />

                    <Route path="/news/"            exact={true} component={News} />
                    <Route path="/news/createNews"  exact={true} component={CreateNews} />
                    <Route path="/news/read/:id"    exact={true} component={NewsPage} />
                </Switch>
            </Body>
        </BrowserRouter>
    )
}

export default Routes;
