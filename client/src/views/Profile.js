import React, { Component } from 'react';
import PropTypes from 'proptypes';
import Navbar from '../components/Navbar';
import ProfileContainer from '../containers/ProfileContainer';

import { connect } from 'react-redux';

class Profile extends Component {
    state = {};

    render() {
        return (
            <section className="Profile-section">
                <Navbar />
                <ProfileContainer user={this.props.user} />
            </section>
        );
    }
}

Profile.propTypes = {};


const mapStateToProps = state => ({
    user: state.user.user,
});

export default connect(mapStateToProps, {})(Profile);