import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import group from "./group";

export default combineReducers({
    user,
    group,
    router: routerReducer,
});
