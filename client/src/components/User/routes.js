import React from 'react';
import { Route } from 'react-router-dom';

import Logout from './logout';

export default class Routes extends React.Component {
    render() {
      return (
        <>
            <Route exact={true} path="/user/logout" Component={Logout}/>
        </>
      )
    };
  }
  