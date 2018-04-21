import { COUNTER_DECREMENT, COUNTER_INCREMENT, USER_LOGIN_FAIL, USER_LOGIN_SUCCESS } from '../types';
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
            return { ...state, user: action.payload.user, is_logged: true};
        }
        case USER_LOGIN_FAIL: {
            return { ...state, errors: ['Email-ul sau parola sunt gresite'] };
        }
        default:
            return state;
    }
};
