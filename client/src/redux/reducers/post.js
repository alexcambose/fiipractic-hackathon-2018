import { POST_CREATE, POST_ALL, ALL_POSTS } from '../types';
export default (state = {
    post: {
        content: "",
        type: "",
        author: "",
        likes: "",
    },
    posts: [],
    errors: []
}, action) => {
    switch (action.type) {
        case POST_CREATE: {
            return { ...state, post: action.payload, posts: [...state.posts, action.payload] }
        }
        case POST_ALL: {
            return { ...state, posts: action.payload }
        }
        case ALL_POSTS: {
            return {...state, posts: action.payload}
        }
        default:
            return state;
    }
};
