import {GROUP_ADD_POST, GROUP_REMOVE_POST, GROUP_FETCH} from "../types";

export default (state = {
    posts: [],
}, action) => {
    switch (action.type) {
        case GROUP_FETCH: {
            return { ...state, ...action.payload.group, ...action.payload };
        }
        case GROUP_ADD_POST: {
            return { ...state, posts: [...state.posts, action.payload] }
        }
        case GROUP_REMOVE_POST: {
            return { ...state, posts: [...state.posts, action.payload] }
        }
        default:
            return state;
    }
};
