import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './stores';


const store = configureStore();


import { routes } from './router';


import './css/base.css';

render(
    <Provider store = { store }>
    <Router history={browserHistory}>
        {
            routes
        }
    </Router>
    </Provider>
    , document.getElementById('app'));
