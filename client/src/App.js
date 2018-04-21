import React, { Component } from 'react';
import RoutesContainer from './routes/RoutesContainer';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";


import { getUserByToken } from './redux/actions/user';


class App extends Component {

    componentDidMount() {
        if (localStorage.getItem('token') && this.props.user.username == undefined) {
            this.props.getUserByToken(localStorage.getItem('token'));
        }
    }

    render() {
        return (
            <div>
                <RoutesContainer />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    is_logged: state.is_logged
});

export default connect(mapStateToProps, {
    getUserByToken
})(App);
