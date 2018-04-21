import axios from 'axios';
import config from '../../config';
import { USER_REGISTER_FAIL, USER_REGISTER_SUCCESS } from '../types';
import history from '../history';

export const register = (username, first_name, last_name, email, password) => async dispatch => {
    console.log('registering!')
    axios.post(config.apiUrl + '/user/register', { username, first_name, last_name, email, password })
        .then(({ data }) => {
            if (data.success) {
                dispatch({ type: USER_REGISTER_SUCCESS });
                history.push('/login');
            } else {
                dispatch({ type: USER_REGISTER_FAIL, payload: data.error[0] });
            }
        });
};
