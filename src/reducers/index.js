import { combineReducers } from 'redux';

import sessionReducer from './sessionReducer';


const appReducer = combineReducers({
  session: sessionReducer
});

export default appReducer;
