import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'react-chrome-redux';
import { Router, browserHistory, Route } from 'react-router'

import App from './components/App.js';
import Main from './components/Main.js';
import Options from './components/Options.js';

import './styles/index.less';

const proxyStore = new Store({
    state: {},
    portName: 'myApplication'
});

const unsubscribe = proxyStore.subscribe(() => {
    unsubscribe();
    render( 
        <Provider store={proxyStore}>
            <Router history={browserHistory}>
                <Route path='/index.html' component={App} />
                <Route path='/main' component={Main} />
                <Route path='/options' component={Options} />
            </Router>
        </Provider>,
        document.getElementById('container')
    )
});

// This method doesn't work. I'm wondering if it's a versioning thing.
// proxyStore.ready().then(() => {
