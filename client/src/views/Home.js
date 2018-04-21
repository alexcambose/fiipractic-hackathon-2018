import React, { Component } from 'react';
import PropTypes from 'proptypes';
import LoginContainer from '../containers/LoginContainer';
import HomeContainer from '../containers/HomeContainer';
import Navbar from '../components/Navbar';

class Login extends Component {
    state = {};

    render() {
        return (
            <section className="home-section">
                <Navbar />
                <HomeContainer />
            </section>
        );
    }
}

Login.propTypes = {};

export default Login;