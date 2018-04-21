import React, { Component } from 'react';
import PropTypes from 'proptypes';
import RegisterContainer from '../containers/RegisterContainer';
import {Redirect} from "react-router";
import {connect} from "react-redux";

class Register extends Component {
    state = {};

    render() {
        return (
            <section className="register-section">
                {this.props.logged && <Redirect to="/home" />}
                <RegisterContainer />
            </section>
        );
    }
}

Register.propTypes = {};

export default connect(
    state => ({
        logged: state.user.is_logged,
    }),
)(Register);