import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { combineReducers } from 'redux';
import weekPageReducer from './pages/weekPage/reducers';
import reduxTestReducer from './pages/reduxTest/reducers';

const rootReducer = combineReducers({
    weekPageReducer,
    reduxTestReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));