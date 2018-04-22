import React, { Component } from 'react';
import PropTypes from 'proptypes';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProfileContainer from '../containers/ProfileContainer';

import { connect } from 'react-redux';

class Profile extends Component {
    state = {};
    //TODO: REQUEST USERS
    render() {
        return (
            <section className="Profile-section">
                <Navbar />
                <ProfileContainer user={this.props.user} />
                <Footer />
            </section>
        );
    }
}

Profile.propTypes = {};


const mapStateToProps = state => ({
    user: state.user.user,
});

export default connect(mapStateToProps, {})(Profile);