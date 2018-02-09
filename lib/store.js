import {createStore, applyMiddleware} from 'redux';
import rootReducer from './ducks';
import logger from 'redux-logger';

const createMiddleware = () => {
    const middlewares = [logger];
    return applyMiddleware(...middlewares);
};

export default (initialState = {}) => {
    const middleware = createMiddleware();
    const store = createStore(rootReducer, initialState, middleware);
    return store;
};
