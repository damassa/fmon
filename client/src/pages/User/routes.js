import React from 'react';
import { Route } from 'react-router-dom';

import Login        from './login';
import Register     from './register';
import PassRecover  from './passRecover';

const UserRoutes = () => {
    return (
         <>
            <Route path="/user/signin"      exact={true} component={Login} />
            <Route path="/user/register"    exact={true} component={Register} />
            <Route path="/user/passRecover" exact={true} component={PassRecover} />
        </>
    )
}

export default UserRoutes;