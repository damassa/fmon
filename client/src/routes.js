import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar           from './components/Navbar';
import Home             from './components/pages/Home';
import Championships    from './components/pages/Championships';
import News             from './components/pages/News';
import Ultimate         from './components/pages/Ultimate';
import Store            from './components/pages/Store';
import UserRoutes       from './components/User/routes';

export default class Routes extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Switch>
            <Route exact={true} path="/"                component={Home} />
            <Route exact={true} path="/championships"   component={Championships} />
            <Route exact={true} path="/news"            component={News} />
            <Route exact={true} path="/ultimate"        component={Ultimate} />
            <Route exact={true} path="/store"           component={Store} />
            <UserRoutes />
        </Switch>
      </BrowserRouter>
    )
  };
}
