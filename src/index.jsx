import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import App from './components/app';
import Dashboards from './components/dashboards';
import Dashboard from './components/dashboard';

ReactDOM.render(
    <Router history={useRouterHistory(createHashHistory)({ queryKey: false})}>
        <Route path="/" component={App}>
            <Route path="dashboards" component={Dashboards}>
                <Route path=":id" component={Dashboard} />
            </Route>
        </Route>
    </Router>,
    document.getElementById('app')
);
