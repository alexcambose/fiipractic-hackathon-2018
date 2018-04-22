import {GROUP_ADD, GROUP_ADD_POST, GROUP_FETCH} from "../types";
import axios from 'axios';
import config from "../../config";
import history from "../history";

export const getGroup = urlname => async dispatch => {
    let data = await axios.get(config.apiUrl + 'group', { params: { urlname, token: localStorage.getItem('token') }});
    data = data.data;
    const posts = [];
    for(let post of data.group.posts) {
        posts.push((await axios.get(config.apiUrl + 'post', {params: { id: post, token: localStorage.getItem('token') }})));
        console.log(post)
    }
    data.group.posts = posts.map(e => e.data.post);
    dispatch({ type: GROUP_FETCH, payload: data });
};

export const createPost = (urlname, content, type, deadline = null) => dispatch => {
    axios.put(config.apiUrl + 'post', { urlname, content, type, deadline, token: localStorage.getItem('token')})
        .then(({ data }) => {
            dispatch({ type: GROUP_ADD_POST, payload: data.post });
        });
};

export const createGroup = (name, urlname) => dispatch => {
    axios.put(config.apiUrl + 'group', { name, urlname, token: localStorage.getItem('token') })
        .then(({ data }) => {
            dispatch({ type: GROUP_ADD });
            history.push('/home/groups');
        })
};