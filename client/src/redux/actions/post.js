import axios from 'axios';
import config from '../../config';
import { POST_CREATE, POST_ALL } from '../types';
import history from '../history';

export const getAllPosts = () => async dispatch => {
    axios.post(config.apiUrl + 'posts', { token: localStorage.getItem('token') })
        .then(({ data }) => {
            if (data.success) {                
                dispatch({ type: POST_ALL , payload: data.posts });
            }
        }).catch(err => console.log(err));
};

export const getPostsByUser = userId => async dispatch => {
    axios.post(config.apiUrl + 'posts/user', { userId: userId, token: localStorage.getItem('token') })
        .then(({ data }) => {
            console.log(data);
            if (data.success) {                
                dispatch({ type: POST_ALL , payload: data.posts });
            }
        }).catch(err => console.log(err));
};

export const create = (content, type) => async dispatch => {
    axios.put(config.apiUrl + 'post', { content, type, token: localStorage.getItem('token') })
        .then(({ data }) => {
            if (data.success) {
                dispatch({ type: POST_CREATE , payload: data });
            }
        }).catch(err => console.log(err));
};