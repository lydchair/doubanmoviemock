import React from 'react';
import { Router, Route, browserHistory, IndexRoute, Redirect } from 'react-router';


import App from './App';
import Index from './pages/Index';
import Home from './pages/Home';
import Find from './pages/Find';
import Login from './pages/Login';
import List from './pages/List';
import Details from './pages/Details';
import FindResult from './pages/FindResult';


const routes = (
    <Route path="/" component={ App }>
        <IndexRoute component={ Index }/>
        <Route path="/" component={ Index }>
            <Route path="/home" component={ Home } />
            <Route path="/find" component={ Find } />
            <Route path="/my" component={ Login } />
            <Route path="/list/:type" component={ List } />
            <Route path="/details/:id" component={ Details } />
            <Route path="/findresult" component={ FindResult } />
        </Route>
    </Route>
)

export { routes };
