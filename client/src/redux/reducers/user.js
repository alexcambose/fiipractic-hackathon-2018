import { COUNTER_DECREMENT, COUNTER_INCREMENT, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS, GET_USER_BY_TOKEN } from '../types';
export default (state = {
    user: {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        code: '',
        _id: ''
    },
    is_logged: localStorage.getItem('token'),
    errors: []
}, action) => {
    switch (action.type) {
        case USER_LOGIN_SUCCESS: {
            return { ...state, user: action.payload.user, is_logged: localStorage.getItem('token')};
        }
        case USER_LOGIN_FAIL: {
            return { ...state, errors: ['Email-ul sau parola sunt gresite'] };
        }
        case GET_USER_BY_TOKEN: {
            return { ...state, user: action.payload.user }
        }
        default:
            return state;
    }
};
