import React, { Component } from 'react';
import PropTypes from 'proptypes';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SettingContainer from '../containers/SettingContainer';
import {Redirect} from "react-router";
import {connect} from "react-redux";

class Timeline extends Component {
    state = {};

    render() {
        return (
            <section className="timeline-section">
                <Navbar />
                <SettingContainer />
                <Footer />
            </section>
        );
    }
}

Timeline.propTypes = {};

export default connect(
    state => ({
        logged: state.user.is_logged,
    }),
)(Timeline);