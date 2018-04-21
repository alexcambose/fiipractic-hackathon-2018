import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './assets/styles/index.scss';
import store from './redux/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

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
