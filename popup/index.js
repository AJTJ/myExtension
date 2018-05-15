import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'react-chrome-redux';
import { Router, browserHistory, Route } from 'react-router'

// import Routes from './Routes';
import App from './components/App.js';
import Main from './components/Main.js';
import Options from './components/Options.js';
import NotFound from './components/NotFound.js';

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
                <Route path ='*' component={NotFound} />
            </Router>
        </Provider>,
        document.getElementById('container')
    )
});

// proxyStore.ready().then(() => {
//   // The store implements the same interface as Redux's store
//   // so you can use tools like `react-redux` no problem!
//   render(
//     <Provider store={proxyStore}>
//         <Router history={browserHistory}>
//             {Routes}
//         </Router>
//     </Provider>
//     , document.getElementById('container'));
// });