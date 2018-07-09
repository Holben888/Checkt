import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { combineReducers } from 'redux';
import pageReducer from './pages/reducers';
import addReducer from './pages/addModal/reducers';
import reduxTestReducer from './pages/reduxTest/reducers';

const rootReducer = combineReducers({
    pageReducer,
    addReducer,
    reduxTestReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk, logger));