import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './assets/styles/index.scss';
import store from './redux/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'babel-polyfill';

import fontawesome from '@fortawesome/fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faCheckSquare from '@fortawesome/fontawesome-free-solid/faCheckSquare';
import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import faCog from '@fortawesome/fontawesome-free-solid/faCog';
import faUser from '@fortawesome/fontawesome-free-solid/faUser';
import faUsers from '@fortawesome/fontawesome-free-solid/faUsers';
import faHome from '@fortawesome/fontawesome-free-solid/faHome';

fontawesome.library.add(brands, faCheckSquare, faCoffee, faSearch, faStar, faHeart, faCog, faUser, faUsers, faHome);

const div = document.createElement('div');
div.id = 'app';
document.body.appendChild(div);


ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </MuiThemeProvider>
,document.getElementById('app'));
