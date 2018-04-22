import React, { Component } from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { NavLink, withRouter } from 'react-router-dom';
import {connect} from "react-redux";

import { logout } from '../redux/actions/user';
import history from 'history';

class Navbar extends Component {

    handleLogOut = () => {
        localStorage.removeItem('token');
        this.props.logout();
        history.push('/login');
        // location.reload('');
    }

    render() {
        const { user } = this.props;

        return (
            <React.Fragment>
                <nav className="navbar">
                    <div className="container">
                        <div className="navbar-start">
                            <div className="navbar-brand">Brand</div>
                            <div className="navbar-search">
                                <FontAwesomeIcon icon="search" />
                                <input type="text" placeholder="Search..." />
                            </div>
                        </div>
                        <div className="navbar-end">
                            <NavLink to='/home/groupsall' exact className="navbar-item"><FontAwesomeIcon icon="users" /> &nbsp; Grupuri</NavLink>
                            <NavLink to='/home/groups' exact className="navbar-item"><FontAwesomeIcon icon="users" /> &nbsp; Grupurile mele</NavLink>
                            <NavLink to='/timeline' exact className="navbar-item" activeClassName="active-item"><FontAwesomeIcon icon="home" /> &nbsp; Home</NavLink>
                            <div className="navbar-item navbar-dropdown">
                                <span>Salut, {user.first_name + " " + user.last_name}</span>
                                <div className="dropdown-content">
                                    <NavLink to={"/profile/" + user.username} exact className="dropdown-link"><FontAwesomeIcon icon="user" /> &nbsp; Profilul meu</NavLink>
                                    <NavLink to='/settings' exact className="dropdown-link"><FontAwesomeIcon icon="cog" /> &nbsp; Setarile mele</NavLink>
                                    <a onClick={this.handleLogOut} exact className="dropdown-link"><FontAwesomeIcon icon="times" /> &nbsp; Log Out</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
            
        );
    }
}
const mapStateToProps = state => ({
    user: state.user.user,
});
export default connect(mapStateToProps, {logout})(withRouter(Navbar));