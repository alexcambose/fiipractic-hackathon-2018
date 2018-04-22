import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import post from './post';
import group from "./group";

export default combineReducers({
    user,
    post,
    group,
    router: routerReducer,
});
