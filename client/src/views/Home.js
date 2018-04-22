import React, { Component } from 'react';
import PropTypes from 'proptypes';
import LoginContainer from '../containers/LoginContainer';
import HomeContainer from '../containers/HomeContainer';
import Navbar from '../components/Navbar';
import { Redirect } from "react-router";

class Login extends Component {
    state = {};

    render() {
        if(!localStorage.getItem('token')) return <Redirect to='/login'/>;
        return (
            <section className="home-section">
                {/* <Navbar /> */}
                <HomeContainer />
                {this.props.children}
            </section>
        );
    }
}

Login.propTypes = {};

export default Login;