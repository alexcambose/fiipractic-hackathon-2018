import React, { Component } from 'react';
import PropTypes from 'proptypes';
import LoginContainer from '../containers/LoginContainer';

class Login extends Component {
    state = {};

    render() {
        return (
            <section className="login-section">
                <LoginContainer />
            </section>
        );
    }
}

Login.propTypes = {};

export default Login;