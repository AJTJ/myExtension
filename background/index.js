import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { alias, wrapStore } from 'react-chrome-redux';

const logger = createLogger({
    level: 'info',
    collapsed: true
});

const aliases = {
    'user-clicked-alias': () => {
        console.log('alias clicked')
    }
}

const middleware = [thunk, logger];

const store = compose(
    applyMiddleware(...middleware, alias(aliases))
)(createStore)(rootReducer);

wrapStore(store, {
    portName: 'myApplication'
});

chrome.tabs.onActivated.addListener(function(tabId, changeInfo, tab) {
    chrome.tabs.executeScript(null, { file: 'content.js' });
});