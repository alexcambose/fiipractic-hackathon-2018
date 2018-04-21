import axios from 'axios';
import config from '../../config';
import { USER_REGISTER_FAIL, USER_REGISTER_SUCCESS, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL } from '../types';
import history from '../history';

export const register = (username, first_name, last_name, email, password) => async dispatch => {
    axios.post(config.apiUrl + 'user/register', { username, first_name, last_name, email, password })
        .then(({ data }) => {
            if (data.success) {
                dispatch({ type: USER_REGISTER_SUCCESS });
                history.push('/login?justlogged=yes');
            } else {
                dispatch({ type: USER_REGISTER_FAIL, payload: data.error[0] });
            }
        });
};

export const login = (email, password) => async dispatch => {
    console.log(email);
    axios.post(config.apiUrl + 'user/login', {email, password})
    .then(res => {
        console.log(res);
        if (res.data.success === true) {
            localStorage.setItem('token', res.data.token);
            dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
        } else {
            dispatch({ type: USER_LOGIN_FAIL });
        }
    })
    .catch(err => console.log(err));
};
