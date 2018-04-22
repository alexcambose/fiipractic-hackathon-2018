import React, { Component } from 'react';
import PropTypes from 'proptypes';
import LoginContainer from '../containers/LoginContainer';
import {Redirect} from "react-router";
import {connect} from "react-redux";

class Login extends Component {
    state = {};

    render() {
        return (
            <section className="login-section">
                {this.props.logged && <Redirect to="/timeline" />}
                <LoginContainer />
            </section>
        );
    }
}

Login.propTypes = {};

export default connect(
    state => ({
        logged: state.user.is_logged,
    }),
)(Login);