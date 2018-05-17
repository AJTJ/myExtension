import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { alias, wrapStore } from 'react-chrome-redux';
import aliases from './aliases';

import { createLogicMiddleware } from 'redux-logic';
import logicArr from './logicArr';

const logger = createLogger({
    level: 'info',
    collapsed: true
});

const logicMiddleware = createLogicMiddleware(logicArr);

const middleware = [ alias(aliases), logicMiddleware, thunk, logger ];

const store = compose(
    applyMiddleware(...middleware)
)(createStore)(rootReducer);

wrapStore(store, {
    portName: 'myApplication'
});

chrome.tabs.onActivated.addListener(function(tabId, changeInfo, tab) {
    chrome.tabs.executeScript(null, { file: 'content.js' });
});