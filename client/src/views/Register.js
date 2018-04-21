import React, { Component } from 'react';
import PropTypes from 'proptypes';
import RegisterContainer from '../containers/RegisterContainer';

class Register extends Component {
    state = {};

    render() {
        return (
            <section className="register-section">
                <RegisterContainer />
            </section>
        );
    }
}

Register.propTypes = {};

export default Register;