import { COUNTER_DECREMENT, COUNTER_INCREMENT, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS, GET_USER_BY_TOKEN, SET_CURRENT_USER } from '../types';
export default (state = {
    user: {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        code: '',
        _id: '',
        isTeacher: ''
    },
    is_logged: localStorage.getItem('token'),
    errors: [],
    currentUser: {
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        code: '',
        _id: '',
        isTeacher: ''
    }
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
        case SET_CURRENT_USER: {
            return { ...state, currentUser: action.payload }
        }
        default:
            return state;
    }
};
