import { combineReducers } from 'redux';

import countReducer from './countReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    countReducer,
    loginReducer
});

export default rootReducer;