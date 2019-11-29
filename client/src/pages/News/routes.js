import React from 'react';
import { Route } from 'react-router-dom';

import Index        from './index';
import NewsPage     from './newsPage';

const NewsRoutes = () => {
    return (
         <>
            <Route path="/news/"      exact={true} component={Index} />
            <Route path="/news/:id"   exact={true} component={NewsPage} />
        </>
    )
}

export default NewsRoutes;
