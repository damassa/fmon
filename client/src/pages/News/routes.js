import React from 'react';
import { Route } from 'react-router-dom';

import Index        from './index';
import NewsPage     from './newsPage';
import CreateNews   from './createNews';

const NewsRoutes = () => {
    return (
         <>
            <Route path="/news/"            exact={true} component={Index} />
            <Route path="/news/createNews"  exact={true} component={CreateNews} />
            <Route path="/news/read/:id"         exact={true} component={NewsPage} />
        </>
    )
}

export default NewsRoutes;
