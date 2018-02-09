import {combineReducers} from 'redux';
import userInfo from './user';

const rootReducer = combineReducers({
    userInfo
});

export default (state, action) => {
    return rootReducer(state, action);
};
